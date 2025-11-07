#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 2, std140) uniform _vp_c1
{
    precise vec4 data[4096];
} vp_c1;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;
layout (location = 8) out vec4 out_attr8;
layout (location = 9) out vec4 out_attr9;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    int temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    int temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    int temp_126;
    uint temp_127;
    uint temp_128;
    int temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    int temp_138;
    uint temp_139;
    uint temp_140;
    int temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    int temp_150;
    uint temp_151;
    uint temp_152;
    int temp_153;
    precise float temp_154;
    int temp_155;
    uint temp_156;
    int temp_157;
    precise float temp_158;
    precise float temp_159;
    int temp_160;
    uint temp_161;
    uint temp_162;
    int temp_163;
    precise float temp_164;
    int temp_165;
    uint temp_166;
    int temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
    precise float temp_210;
    precise float temp_211;
    precise float temp_212;
    precise float temp_213;
    precise float temp_214;
    precise float temp_215;
    precise float temp_216;
    precise float temp_217;
    precise float temp_218;
    precise float temp_219;
    precise float temp_220;
    precise float temp_221;
    precise float temp_222;
    precise float temp_223;
    precise float temp_224;
    precise float temp_225;
    precise float temp_226;
    precise float temp_227;
    precise float temp_228;
    precise float temp_229;
    precise float temp_230;
    precise float temp_231;
    precise float temp_232;
    precise float temp_233;
    precise float temp_234;
    precise float temp_235;
    precise float temp_236;
    precise float temp_237;
    precise float temp_238;
    precise float temp_239;
    precise float temp_240;
    precise float temp_241;
    precise float temp_242;
    precise float temp_243;
    precise float temp_244;
    precise float temp_245;
    precise float temp_246;
    precise float temp_247;
    precise float temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise float temp_252;
    precise float temp_253;
    precise float temp_254;
    precise float temp_255;
    precise float temp_256;
    precise float temp_257;
    precise float temp_258;
    precise float temp_259;
    precise float temp_260;
    precise float temp_261;
    precise float temp_262;
    precise float temp_263;
    precise float temp_264;
    precise float temp_265;
    precise float temp_266;
    precise float temp_267;
    precise float temp_268;
    precise float temp_269;
    precise float temp_270;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C9807980CC70002 Mov
    // 0x000010: 0xEFD87F800807FF01 Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4C9807980CD70003 Mov
    // 0x000028: 0xEFD87F800847FF09 Ald
    temp_1 = in_attr0.y;
    // 0x000030: 0x4C98079C2307000D Mov
    // 0x000038: 0xEFD87F800887FF00 Ald
    temp_2 = in_attr0.z;
    // 0x000048: 0x4C6810180CC70202 Fmul
    temp_3 = vp_c6.data[51].x * vp_c6.data[51].x;
    // 0x000050: 0xEFD87F801047FF12 Ald
    temp_4 = in_attr8.y;
    // 0x000058: 0x4C98079400A70018 Mov
    // 0x000068: 0xEFD87F800907FF0F Ald
    temp_5 = in_attr1.x;
    // 0x000070: 0x4C98079400B70019 Mov
    // 0x000078: 0x49A001180CD70302 Ffma
    temp_6 = fma(vp_c6.data[51].y, vp_c6.data[51].y, temp_3);
    // 0x000088: 0x4C9807980CE70003 Mov
    // 0x000090: 0x4C9807940027001B Mov
    // 0x000098: 0x4C9807940037001C Mov
    // 0x0000A8: 0x4C68101000070106 Fmul
    temp_7 = temp_0 * vp_c4.data[0].x;
    // 0x0000B0: 0x49A001180CE70303 Ffma
    temp_8 = fma(vp_c6.data[51].z, vp_c6.data[51].z, temp_6);
    // 0x0000B8: 0x4C68101000470102 Fmul
    temp_9 = temp_0 * vp_c4.data[1].x;
    // 0x0000C8: 0x5080000000570303 Mufu
    temp_10 = inversesqrt(temp_8);
    // 0x0000D0: 0x4C68101000870104 Fmul
    temp_11 = temp_0 * vp_c4.data[2].x;
    // 0x0000D8: 0x5C68100000170117 Fmul
    temp_12 = temp_0 * temp_0;
    // 0x0000E8: 0xEFD87F800A87FF01 Ald
    temp_13 = in_attr2.z;
    // 0x0000F0: 0x49A0031000170907 Ffma
    temp_14 = fma(temp_1, vp_c4.data[0].y, temp_7);
    // 0x0000F8: 0x49A0011000570902 Ffma
    temp_15 = fma(temp_1, vp_c4.data[1].y, temp_9);
    // 0x000108: 0x49A0021000970906 Ffma
    temp_16 = fma(temp_1, vp_c4.data[2].y, temp_11);
    // 0x000110: 0x59A00B8000970909 Ffma
    temp_17 = fma(temp_1, temp_1, temp_12);
    // 0x000118: 0x49A0039000270007 Ffma
    temp_18 = fma(temp_2, vp_c4.data[0].z, temp_14);
    // 0x000128: 0x51A00C9400D71216 Ffma
    temp_19 = fma(temp_4, vp_c5.data[2].w, vp_c5.data[3].y);
    // 0x000130: 0x49A0011000670005 Ffma
    temp_20 = fma(temp_2, vp_c4.data[1].z, temp_15);
    // 0x000138: 0x4C6810180CC70302 Fmul
    temp_21 = temp_10 * vp_c6.data[51].x;
    // 0x000148: 0x4C6810180CE70310 Fmul
    temp_22 = temp_10 * vp_c6.data[51].z;
    // 0x000150: 0x49A0031000A70004 Ffma
    temp_23 = fma(temp_2, vp_c4.data[2].z, temp_16);
    // 0x000158: 0x4C58101000370706 Fadd
    temp_24 = temp_18 + vp_c4.data[0].w;
    // 0x000168: 0x4C6810180CD70303 Fmul
    temp_25 = temp_10 * vp_c6.data[51].y;
    // 0x000170: 0x4C58101000770505 Fadd
    temp_26 = temp_20 + vp_c4.data[1].w;
    // 0x000178: 0x49A101180CF70208 Ffma
    temp_27 = 0.0 - vp_c6.data[51].w;
    temp_28 = fma(temp_21, temp_27, temp_21);
    // 0x000188: 0x49A108180CF71007 Ffma
    temp_29 = 0.0 - vp_c6.data[51].w;
    temp_30 = fma(temp_22, temp_29, temp_22);
    // 0x000190: 0x4C58101000B70404 Fadd
    temp_31 = temp_23 + vp_c4.data[2].w;
    // 0x000198: 0x4C68101000870F1A Fmul
    temp_32 = temp_5 * vp_c4.data[2].x;
    // 0x0001A8: 0x4C6810140967050B Fmul
    temp_33 = temp_26 * vp_c5.data[37].z;
    // 0x0001B0: 0x1E23DCCCCCD70808 Fmul32i
    temp_34 = temp_28 * 0.100000001;
    // 0x0001B8: 0x1E23DCCCCCD70707 Fmul32i
    temp_35 = temp_30 * 0.100000001;
    // 0x0001C8: 0x59A105800087060A Ffma
    temp_36 = 0.0 - temp_34;
    temp_37 = fma(temp_24, temp_36, temp_33);
    // 0x0001D0: 0x4C58301000770508 Fadd
    temp_38 = 0.0 - vp_c4.data[1].w;
    temp_39 = temp_26 + temp_38;
    // 0x0001D8: 0x59A0050000770407 Ffma
    temp_40 = fma(temp_31, temp_35, temp_37);
    // 0x0001E8: 0x4C58301000B7040A Fadd
    temp_41 = 0.0 - vp_c4.data[2].w;
    temp_42 = temp_31 + temp_41;
    // 0x0001F0: 0x32A003BF00070D0D Ffma
    temp_43 = fma(vp_c7.data[140].x, 0.5, temp_40);
    // 0x0001F8: 0x4C58301000370607 Fadd
    temp_44 = 0.0 - vp_c4.data[0].w;
    temp_45 = temp_24 + temp_44;
    // 0x000208: 0x3868104040070D0B Fmul
    temp_46 = temp_43 * 3.0;
    // 0x000210: 0x59A1038000A7FF15 Ffma
    temp_47 = 0.0 - temp_42;
    temp_48 = fma(0.0, temp_47, temp_45);
    // 0x000218: 0x5C6910000077FF07 Fmul
    temp_49 = 0.0 - temp_45;
    temp_50 = 0.0 * temp_49;
    // 0x000228: 0x5C90000000D7000C Rro
    // 0x000230: 0x5080000000070C0C Mufu
    temp_51 = cos(temp_43);
    // 0x000238: 0x5C90000000B70011 Rro
    // 0x000248: 0x59A2040000A7FF0B Ffma
    temp_52 = 0.0 - temp_39;
    temp_53 = fma(0.0, temp_42, temp_52);
    // 0x000250: 0x5080000000071111 Mufu
    temp_54 = cos(temp_46);
    // 0x000258: 0x59A003800087FF07 Ffma
    temp_55 = fma(0.0, temp_39, temp_50);
    // 0x000268: 0x38681040A0070D08 Fmul
    temp_56 = temp_43 * 5.0;
    // 0x000270: 0x4C68101409770D0D Fmul
    temp_57 = temp_43 * vp_c5.data[37].w;
    // 0x000278: 0x5C68100000B7020A Fmul
    temp_58 = temp_21 * temp_53;
    // 0x000288: 0xEFD87F800A47FF0B Ald
    temp_59 = in_attr2.y;
    // 0x000290: 0x5C90000000870014 Rro
    // 0x000298: 0x51A00C1400C71208 Ffma
    temp_60 = fma(temp_4, vp_c5.data[2].z, vp_c5.data[3].x);
    // 0x0002A8: 0x5080000000071414 Mufu
    temp_61 = cos(temp_56);
    // 0x0002B0: 0x5C68100000C70C0E Fmul
    temp_62 = temp_51 * temp_51;
    // 0x0002B8: 0xEFD87F800A07FF0C Ald
    temp_63 = in_attr2.x;
    // 0x0002C8: 0x5C90000000D70013 Rro
    // 0x0002D0: 0xEFD87F801007FF0D Ald
    temp_64 = in_attr8.x;
    // 0x0002D8: 0x59A0050001570315 Ffma
    temp_65 = fma(temp_25, temp_48, temp_58);
    // 0x0002E8: 0x5080000000171313 Mufu
    temp_66 = sin(temp_57);
    // 0x0002F0: 0x5C68100001170E0E Fmul
    temp_67 = temp_62 * temp_54;
    // 0x0002F8: 0xEFD87F800947FF11 Ald
    temp_68 = in_attr1.y;
    // 0x000308: 0x51A00D940047120A Ffma
    temp_69 = fma(temp_4, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000310: 0x51A00E1400571212 Ffma
    temp_70 = fma(temp_4, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000318: 0x4C9807980CF70018 Mov
    // 0x000328: 0x59A00A8000771015 Ffma
    temp_71 = fma(temp_22, temp_55, temp_65);
    // 0x000330: 0x4C68101000470F1B Fmul
    temp_72 = temp_5 * vp_c4.data[1].x;
    // 0x000338: 0x5C68120001470E07 Fmul
    temp_73 = temp_67 * 0.5;
    temp_74 = temp_73 * temp_61;
    // 0x000348: 0xEFD87F800987FF0E Ald
    temp_75 = in_attr1.z;
    // 0x000350: 0x4C68101000070F14 Fmul
    temp_76 = temp_5 * vp_c4.data[0].x;
    // 0x000358: 0x4C68101409571818 Fmul
    temp_77 = vp_c6.data[51].w * vp_c5.data[37].y;
    // 0x000368: 0x1E23DCCCCCD7131C Fmul32i
    temp_78 = temp_66 * 0.100000001;
    // 0x000370: 0x4C68101000070C19 Fmul
    temp_79 = temp_63 * vp_c4.data[0].x;
    // 0x000378: 0x4C68101000870C1D Fmul
    temp_80 = temp_63 * vp_c4.data[2].x;
    // 0x000388: 0x4C68101000470C1E Fmul
    temp_81 = temp_63 * vp_c4.data[1].x;
    // 0x000390: 0x59A00E0000771515 Ffma
    temp_82 = fma(temp_71, temp_74, temp_78);
    // 0x000398: 0x49A00B1400970D16 Ffma
    temp_83 = fma(temp_64, vp_c5.data[2].y, temp_19);
    // 0x0003A8: 0x49A00C9000170B17 Ffma
    temp_84 = fma(temp_59, vp_c4.data[0].y, temp_79);
    // 0x0003B0: 0x49A00E9000970B0C Ffma
    temp_85 = fma(temp_59, vp_c4.data[2].y, temp_80);
    // 0x0003B8: 0x49A00F1000570B13 Ffma
    temp_86 = fma(temp_59, vp_c4.data[1].y, temp_81);
    // 0x0003C8: 0x5C68100001571815 Fmul
    temp_87 = temp_77 * temp_82;
    // 0x0003D0: 0x49A00A100017110B Ffma
    temp_88 = fma(temp_68, vp_c4.data[0].y, temp_76);
    // 0x0003D8: 0x49A0041400870D19 Ffma
    temp_89 = fma(temp_64, vp_c5.data[2].x, temp_60);
    // 0x0003E8: 0x49A00B9000270117 Ffma
    temp_90 = fma(temp_13, vp_c4.data[0].z, temp_84);
    // 0x0003F0: 0x49A00D100097110F Ffma
    temp_91 = fma(temp_68, vp_c4.data[2].y, temp_32);
    // 0x0003F8: 0x59A004800007001A Ffma
    temp_92 = fma(temp_2, temp_2, temp_17);
    // 0x000408: 0x4CB0119002371A14 F2i
    temp_93 = trunc(vp_c4.data[8].w);
    temp_94 = int(temp_93);
    // 0x000410: 0x5C9000000157001C Rro
    // 0x000418: 0x5080000000871A15 Mufu
    temp_95 = sqrt(temp_92);
    // 0x000428: 0x49A0059000270E08 Ffma
    temp_96 = fma(temp_75, vp_c4.data[0].z, temp_88);
    // 0x000430: 0x5080000000171C0B Mufu
    temp_97 = sin(temp_87);
    // 0x000438: 0x49A00D9000571111 Ffma
    temp_98 = fma(temp_68, vp_c4.data[1].y, temp_72);
    // 0x000448: 0x49A0061000A70100 Ffma
    temp_99 = fma(temp_13, vp_c4.data[2].z, temp_85);
    // 0x000450: 0x5080000000071C0C Mufu
    temp_100 = cos(temp_87);
    // 0x000458: 0x49A0099000670101 Ffma
    temp_101 = fma(temp_13, vp_c4.data[1].z, temp_86);
    // 0x000468: 0x5C6810000177171B Fmul
    temp_102 = temp_90 * temp_90;
    // 0x000470: 0x49A0051400070D09 Ffma
    temp_103 = fma(temp_64, vp_c5.data[0].x, temp_69);
    // 0x000478: 0x4C98079000B70013 Mov
    // 0x000488: 0x49A0089000670E0A Ffma
    temp_104 = fma(temp_75, vp_c4.data[1].z, temp_98);
    // 0x000490: 0x5C68100000870811 Fmul
    temp_105 = temp_96 * temp_96;
    // 0x000498: 0x49A0091400170D0D Ffma
    temp_106 = fma(temp_64, vp_c5.data[0].y, temp_70);
    // 0x0004A8: 0x59A00D800017011B Ffma
    temp_107 = fma(temp_101, temp_101, temp_102);
    // 0x0004B0: 0x49A0079000A70E0E Ffma
    temp_108 = fma(temp_75, vp_c4.data[2].z, temp_91);
    // 0x0004B8: 0x384800000047140F Shl
    temp_109 = temp_94 << 4;
    // 0x0004C8: 0x4C69101000770B1E Fmul
    temp_110 = 0.0 - vp_c4.data[1].w;
    temp_111 = temp_97 * temp_110;
    // 0x0004D0: 0x4C59101000B71312 Fadd
    temp_112 = 0.0 - vp_c4.data[2].w;
    temp_113 = temp_112 + vp_c4.data[2].w;
    // 0x0004D8: 0x59A0088000A70A13 Ffma
    temp_114 = fma(temp_104, temp_104, temp_105);
    // 0x0004E8: 0x59A00D8000070014 Ffma
    temp_115 = fma(temp_99, temp_99, temp_107);
    // 0x0004F0: 0x5C68100001570211 Fmul
    temp_116 = temp_21 * temp_95;
    // 0x0004F8: 0x5080000000571402 Mufu
    temp_117 = inversesqrt(temp_115);
    // 0x000508: 0x5C6810000157031B Fmul
    temp_118 = temp_25 * temp_95;
    // 0x000510: 0xEFD87F800AC7FF14 Ald
    temp_119 = in_attr2.w;
    // 0x000518: 0x4C68101000770C1A Fmul
    temp_120 = temp_100 * vp_c4.data[1].w;
    // 0x000528: 0xEFF07F800E07FF09 Ast
    out_attr6.x = temp_103;
    // 0x000530: 0x49A30F1000370C03 Ffma
    temp_121 = 0.0 - vp_c4.data[0].w;
    temp_122 = 0.0 - temp_111;
    temp_123 = fma(temp_100, temp_121, temp_122);
    // 0x000538: 0xEFF07F800E47FF0D Ast
    out_attr6.y = temp_106;
    // 0x000548: 0x59A0098000E70E13 Ffma
    temp_124 = fma(temp_108, temp_108, temp_114);
    // 0x000550: 0xEFF07F800E87FF19 Ast
    out_attr6.z = temp_89;
    // 0x000558: 0x5C6810000157101D Fmul
    temp_125 = temp_22 * temp_95;
    // 0x000568: 0xEF94007068870F10 Ldc
    temp_126 = temp_109 + 0x688;
    temp_127 = uint(temp_126) >> 2;
    temp_128 = temp_127 >> 2;
    temp_129 = int(temp_127) & 3;
    temp_130 = vp_c7.data[int(temp_128)][temp_129];
    // 0x000570: 0x5C5810000127041C Fadd
    temp_131 = temp_31 + temp_113;
    // 0x000578: 0x5080000000571313 Mufu
    temp_132 = inversesqrt(temp_124);
    // 0x000588: 0x49A30D1000370B1A Ffma
    temp_133 = 0.0 - vp_c4.data[0].w;
    temp_134 = 0.0 - temp_120;
    temp_135 = fma(temp_97, temp_133, temp_134);
    // 0x000590: 0xEFF07F800EC7FF16 Ast
    out_attr6.w = temp_83;
    // 0x000598: 0x4C58101000370303 Fadd
    temp_136 = temp_123 + vp_c4.data[0].w;
    // 0x0005A8: 0x5C68100001171811 Fmul
    temp_137 = temp_77 * temp_116;
    // 0x0005B0: 0xEF94007048870F12 Ldc
    temp_138 = temp_109 + 0x488;
    temp_139 = uint(temp_138) >> 2;
    temp_140 = temp_139 >> 2;
    temp_141 = int(temp_139) & 3;
    temp_142 = vp_c7.data[int(temp_140)][temp_141];
    // 0x0005B8: 0x5C68100001B71815 Fmul
    temp_143 = temp_77 * temp_118;
    // 0x0005C8: 0x5C68100001D71818 Fmul
    temp_144 = temp_77 * temp_125;
    // 0x0005D0: 0x59A00E000057FF1B Ffma
    temp_145 = fma(0.0, temp_26, temp_131);
    // 0x0005D8: 0x4C58101000771A1A Fadd
    temp_146 = temp_135 + vp_c4.data[1].w;
    // 0x0005E8: 0x5C68100000271717 Fmul
    temp_147 = temp_90 * temp_117;
    // 0x0005F0: 0x5C6810000027011C Fmul
    temp_148 = temp_101 * temp_117;
    // 0x0005F8: 0xEFF07F800907FF17 Ast
    out_attr1.x = temp_147;
    // 0x000608: 0x5C6810000027001D Fmul
    temp_149 = temp_99 * temp_117;
    // 0x000610: 0xEF95007048070F00 Ldc
    temp_150 = temp_109 + 0x480;
    temp_151 = uint(temp_150) >> 2;
    temp_152 = temp_151 >> 2;
    temp_153 = int(temp_151) & 3;
    temp_154 = vp_c7.data[int(temp_152)][temp_153];
    temp_155 = int(temp_151) + 1;
    temp_156 = uint(temp_155) >> 2;
    temp_157 = temp_155 & 3;
    temp_158 = vp_c7.data[int(temp_156)][temp_157];
    // 0x000618: 0x59A001800047FF1E Ffma
    temp_159 = fma(0.0, temp_31, temp_136);
    // 0x000628: 0xEF95007068070F02 Ldc
    temp_160 = temp_109 + 0x680;
    temp_161 = uint(temp_160) >> 2;
    temp_162 = temp_161 >> 2;
    temp_163 = int(temp_161) & 3;
    temp_164 = vp_c7.data[int(temp_162)][temp_163];
    temp_165 = int(temp_161) + 1;
    temp_166 = uint(temp_165) >> 2;
    temp_167 = temp_165 & 3;
    temp_168 = vp_c7.data[int(temp_166)][temp_167];
    // 0x000630: 0x59A00D000047FF1F Ffma
    temp_169 = fma(0.0, temp_31, temp_146);
    // 0x000638: 0xEFF07F800947FF1C Ast
    out_attr1.y = temp_148;
    // 0x000648: 0x5C6810000137081A Fmul
    temp_170 = temp_96 * temp_132;
    // 0x000650: 0xEFF07F800987FF1D Ast
    out_attr1.z = temp_149;
    // 0x000658: 0x5C68100001370A0A Fmul
    temp_171 = temp_104 * temp_132;
    // 0x000668: 0xEFF07F800807FF1A Ast
    out_attr0.x = temp_170;
    // 0x000670: 0x5C68100001370E0E Fmul
    temp_172 = temp_108 * temp_132;
    // 0x000678: 0xEFF07F800847FF0A Ast
    out_attr0.y = temp_171;
    // 0x000688: 0x59A10F0000B70513 Ffma
    temp_173 = 0.0 - temp_97;
    temp_174 = fma(temp_26, temp_173, temp_159);
    // 0x000690: 0xEFF07F800887FF0E Ast
    out_attr0.z = temp_172;
    // 0x000698: 0x59A10D800067FF1B Ffma
    temp_175 = 0.0 - temp_24;
    temp_176 = fma(0.0, temp_175, temp_145);
    // 0x0006A8: 0x5C68100001870718 Fmul
    temp_177 = temp_74 * temp_144;
    // 0x0006B0: 0x59A00F8000C70505 Ffma
    temp_178 = fma(temp_26, temp_100, temp_169);
    // 0x0006B8: 0x5C68100001170711 Fmul
    temp_179 = temp_74 * temp_137;
    // 0x0006C8: 0x5C68100001570707 Fmul
    temp_180 = temp_74 * temp_143;
    // 0x0006D0: 0x59A0098000C70613 Ffma
    temp_181 = fma(temp_24, temp_100, temp_174);
    // 0x0006D8: 0x5C68100001A71D09 Fmul
    temp_182 = temp_149 * temp_170;
    // 0x0006E8: 0x49A00D840007181B Ffma
    temp_183 = fma(temp_177, vp_c1.data[0].x, temp_176);
    // 0x0006F0: 0x59A0028000B70605 Ffma
    temp_184 = fma(temp_24, temp_97, temp_178);
    // 0x0006F8: 0x5C68100000E71C08 Fmul
    temp_185 = temp_148 * temp_172;
    // 0x000708: 0x5C68100000A7170B Fmul
    temp_186 = temp_147 * temp_171;
    // 0x000710: 0x49A0098400071111 Ffma
    temp_187 = fma(temp_179, vp_c1.data[0].x, temp_181);
    // 0x000718: 0x59A2048000E71709 Ffma
    temp_188 = 0.0 - temp_182;
    temp_189 = fma(temp_147, temp_172, temp_188);
    // 0x000728: 0x59A0080001271B10 Ffma
    temp_190 = fma(temp_183, temp_142, temp_130);
    // 0x000730: 0x49A0028400070704 Ffma
    temp_191 = fma(temp_180, vp_c1.data[0].x, temp_184);
    // 0x000738: 0xEFF07F800D87FF10 Ast
    out_attr5.z = temp_190;
    // 0x000748: 0x59A0010000071100 Ffma
    temp_192 = fma(temp_187, temp_154, temp_164);
    // 0x000750: 0x4C5810180BA71005 Fadd
    temp_193 = temp_190 + vp_c6.data[46].z;
    // 0x000758: 0xEFF07F800D07FF00 Ast
    out_attr5.x = temp_192;
    // 0x000768: 0x59A0018000170404 Ffma
    temp_194 = fma(temp_191, temp_158, temp_168);
    // 0x000770: 0x4C68100C00070001 Fmul
    temp_195 = temp_192 * vp_c3.data[0].x;
    // 0x000778: 0xEFF07F800D47FF04 Ast
    out_attr5.y = temp_194;
    // 0x000788: 0x59A2040000A71D0A Ffma
    temp_196 = 0.0 - temp_185;
    temp_197 = fma(temp_149, temp_171, temp_196);
    // 0x000790: 0x5C6810000147090D Fmul
    temp_198 = temp_189 * temp_119;
    // 0x000798: 0x4C6810180C270503 Fmul
    temp_199 = temp_193 * vp_c6.data[48].z;
    // 0x0007A8: 0xEFF07F800A47FF0D Ast
    out_attr2.y = temp_198;
    // 0x0007B0: 0x4C5810180B970406 Fadd
    temp_200 = temp_194 + vp_c6.data[46].y;
    // 0x0007B8: 0x4C6810180C670508 Fmul
    temp_201 = temp_193 * vp_c6.data[49].z;
    // 0x0007C8: 0x4C6810180CA70509 Fmul
    temp_202 = temp_193 * vp_c6.data[50].z;
    // 0x0007D0: 0x4C68100C00470005 Fmul
    temp_203 = temp_192 * vp_c3.data[1].x;
    // 0x0007D8: 0x49A0008C00170407 Ffma
    temp_204 = fma(temp_194, vp_c3.data[0].y, temp_195);
    // 0x0007E8: 0x5C68100001470A0C Fmul
    temp_205 = temp_197 * temp_119;
    // 0x0007F0: 0x59A2058001A71C0B Ffma
    temp_206 = 0.0 - temp_186;
    temp_207 = fma(temp_148, temp_170, temp_206);
    // 0x0007F8: 0xEFF07F800A07FF0C Ast
    out_attr2.x = temp_205;
    // 0x000808: 0x49A004980C970601 Ffma
    temp_208 = fma(temp_200, vp_c6.data[50].y, temp_202);
    // 0x000810: 0x49A0028C0057040A Ffma
    temp_209 = fma(temp_194, vp_c3.data[1].y, temp_203);
    // 0x000818: 0x49A0038C00271009 Ffma
    temp_210 = fma(temp_190, vp_c3.data[0].z, temp_204);
    // 0x000828: 0x49A001980C170602 Ffma
    temp_211 = fma(temp_200, vp_c6.data[48].y, temp_199);
    // 0x000830: 0x49A004180C570603 Ffma
    temp_212 = fma(temp_200, vp_c6.data[49].y, temp_201);
    // 0x000838: 0x5C68100001470B14 Fmul
    temp_213 = temp_207 * temp_119;
    // 0x000848: 0x4C68100C00870006 Fmul
    temp_214 = temp_192 * vp_c3.data[2].x;
    // 0x000850: 0xEFF07F800A87FF14 Ast
    out_attr2.z = temp_213;
    // 0x000858: 0x49A0050C00671008 Ffma
    temp_215 = fma(temp_190, vp_c3.data[1].z, temp_209);
    // 0x000868: 0x4C58100C00370909 Fadd
    temp_216 = temp_210 + vp_c3.data[0].w;
    // 0x000870: 0x4C5830180B07000B Fadd
    temp_217 = 0.0 - vp_c6.data[44].x;
    temp_218 = temp_192 + temp_217;
    // 0x000878: 0x4C58101002071005 Fadd
    temp_219 = temp_190 + vp_c4.data[8].x;
    // 0x000888: 0x4C5830180B17040C Fadd
    temp_220 = 0.0 - vp_c6.data[44].y;
    temp_221 = temp_194 + temp_220;
    // 0x000890: 0x49A0030C00970406 Ffma
    temp_222 = fma(temp_194, vp_c3.data[2].y, temp_214);
    // 0x000898: 0x4C58100C00770808 Fadd
    temp_223 = temp_215 + vp_c3.data[1].w;
    // 0x0008A8: 0x4C68101802C70909 Fmul
    temp_224 = temp_216 * vp_c6.data[11].x;
    // 0x0008B0: 0x4C58300C0337040D Fadd
    temp_225 = 0.0 - vp_c3.data[12].w;
    temp_226 = temp_194 + temp_225;
    // 0x0008B8: 0x4C68101803870B0B Fmul
    temp_227 = temp_218 * vp_c6.data[14].x;
    // 0x0008C8: 0xEFF07F800B47FF0D Ast
    out_attr3.y = temp_226;
    // 0x0008D0: 0x4C5810180B870004 Fadd
    temp_228 = temp_192 + vp_c6.data[46].x;
    // 0x0008D8: 0x49A0038C00270507 Ffma
    temp_229 = fma(temp_219, vp_c3.data[0].z, temp_204);
    // 0x0008E8: 0x49A0049802D70808 Ffma
    temp_230 = fma(temp_223, vp_c6.data[11].y, temp_224);
    // 0x0008F0: 0x4C5830180B271009 Fadd
    temp_231 = 0.0 - vp_c6.data[44].z;
    temp_232 = temp_190 + temp_231;
    // 0x0008F8: 0x49A0050C0067050A Ffma
    temp_233 = fma(temp_219, vp_c3.data[1].z, temp_209);
    // 0x000908: 0x49A0059803970C0B Ffma
    temp_234 = fma(temp_221, vp_c6.data[14].y, temp_227);
    // 0x000910: 0x49A001980C470403 Ffma
    temp_235 = fma(temp_228, vp_c6.data[49].x, temp_212);
    // 0x000918: 0x4C58100C00370707 Fadd
    temp_236 = temp_229 + vp_c3.data[0].w;
    // 0x000928: 0x49A001180C070402 Ffma
    temp_237 = fma(temp_228, vp_c6.data[48].x, temp_211);
    // 0x000930: 0x49A0030C00A70505 Ffma
    temp_238 = fma(temp_219, vp_c3.data[2].z, temp_222);
    // 0x000938: 0x4C58300C02F7000C Fadd
    temp_239 = 0.0 - vp_c3.data[11].w;
    temp_240 = temp_192 + temp_239;
    // 0x000948: 0x49A0059803A7090B Ffma
    temp_241 = fma(temp_232, vp_c6.data[14].z, temp_234);
    // 0x000950: 0xEFF07F800B07FF0C Ast
    out_attr3.x = temp_240;
    // 0x000958: 0x49A000980C870404 Ffma
    temp_242 = fma(temp_228, vp_c6.data[50].x, temp_208);
    // 0x000968: 0x4C6810180BB70309 Fmul
    temp_243 = temp_235 * vp_c6.data[46].w;
    // 0x000970: 0x49A0030C00A71006 Ffma
    temp_244 = fma(temp_190, vp_c3.data[2].z, temp_222);
    // 0x000978: 0xEFF07F801147FF09 Ast
    out_attr9.y = temp_243;
    // 0x000988: 0x4C68100C02470700 Fmul
    temp_245 = temp_236 * vp_c3.data[9].x;
    // 0x000990: 0x4C68100C01C70701 Fmul
    temp_246 = temp_236 * vp_c3.data[7].x;
    // 0x000998: 0x4C68100C02870703 Fmul
    temp_247 = temp_236 * vp_c3.data[10].x;
    // 0x0009A8: 0x4C58100C00770A0A Fadd
    temp_248 = temp_233 + vp_c3.data[1].w;
    // 0x0009B0: 0x4C68100C02070707 Fmul
    temp_249 = temp_236 * vp_c3.data[8].x;
    // 0x0009B8: 0x4C6810180BB70202 Fmul
    temp_250 = temp_237 * vp_c6.data[46].w;
    // 0x0009C8: 0x4C58100C00B70606 Fadd
    temp_251 = temp_244 + vp_c3.data[2].w;
    // 0x0009D0: 0xEFF07F801107FF02 Ast
    out_attr9.x = temp_250;
    // 0x0009D8: 0x4C58100C00B70505 Fadd
    temp_252 = temp_238 + vp_c3.data[2].w;
    // 0x0009E8: 0xEFF07F800C87FF06 Ast
    out_attr4.z = temp_251;
    // 0x0009F0: 0x49A0000C02570A00 Ffma
    temp_253 = fma(temp_248, vp_c3.data[9].y, temp_245);
    // 0x0009F8: 0x49A0018C02970A03 Ffma
    temp_254 = fma(temp_248, vp_c3.data[10].y, temp_247);
    // 0x000A08: 0x49A0038C02170A07 Ffma
    temp_255 = fma(temp_248, vp_c3.data[8].y, temp_249);
    // 0x000A10: 0x49A0008C01D70A02 Ffma
    temp_256 = fma(temp_248, vp_c3.data[7].y, temp_246);
    // 0x000A18: 0x49A0041802E70608 Ffma
    temp_257 = fma(temp_251, vp_c6.data[11].z, temp_230);
    // 0x000A28: 0x4C98079803C7000D Mov
    // 0x000A30: 0x49A0000C02670500 Ffma
    temp_258 = fma(temp_252, vp_c3.data[9].z, temp_253);
    // 0x000A38: 0x4C98079803070006 Mov
    // 0x000A48: 0x49A0018C02A70503 Ffma
    temp_259 = fma(temp_252, vp_c3.data[10].z, temp_254);
    // 0x000A50: 0x49A0010C01E70502 Ffma
    temp_260 = fma(temp_252, vp_c3.data[7].z, temp_256);
    // 0x000A58: 0x49A0038C02270507 Ffma
    temp_261 = fma(temp_252, vp_c3.data[8].z, temp_255);
    // 0x000A68: 0x4C58300C0377100E Fadd
    temp_262 = 0.0 - vp_c3.data[13].w;
    temp_263 = temp_190 + temp_262;
    // 0x000A70: 0x4C6810180BB70404 Fmul
    temp_264 = temp_242 * vp_c6.data[46].w;
    // 0x000A78: 0xEFF07F800B87FF0E Ast
    out_attr3.z = temp_263;
    // 0x000A88: 0x51A0069803B70B0B Ffma
    temp_265 = fma(temp_241, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000A90: 0xEFF07F801187FF04 Ast
    out_attr9.z = temp_264;
    // 0x000A98: 0x51A0031802F70808 Ffma
    temp_266 = fma(temp_257, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000AA8: 0xEFF07F801047FF0B Ast
    out_attr8.y = temp_265;
    // 0x000AB0: 0x4C58100C02770000 Fadd
    temp_267 = temp_258 + vp_c3.data[9].w;
    // 0x000AB8: 0xEFF07F801007FF08 Ast
    out_attr8.x = temp_266;
    // 0x000AC8: 0x4C58100C01F70202 Fadd
    temp_268 = temp_260 + vp_c3.data[7].w;
    // 0x000AD0: 0xEFF07F800787FF00 Ast
    gl_Position.z = temp_267;
    // 0x000AD8: 0x4C58100C02B70303 Fadd
    temp_269 = temp_259 + vp_c3.data[10].w;
    // 0x000AE8: 0xEFF07F800707FF02 Ast
    gl_Position.x = temp_268;
    // 0x000AF0: 0x4C58100C02370707 Fadd
    temp_270 = temp_261 + vp_c3.data[8].w;
    // 0x000AF8: 0xEFF07F8007C7FF03 Ast
    gl_Position.w = temp_269;
    // 0x000B08: 0xEFF07F800747FF07 Ast
    gl_Position.y = temp_270;
    // 0x000B10: 0xE30000000007000F Exit
    return;
}
