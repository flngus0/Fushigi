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
    int temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
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
    int temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    int temp_117;
    uint temp_118;
    uint temp_119;
    int temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    int temp_124;
    uint temp_125;
    uint temp_126;
    int temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    int temp_146;
    uint temp_147;
    uint temp_148;
    int temp_149;
    precise float temp_150;
    int temp_151;
    uint temp_152;
    int temp_153;
    precise float temp_154;
    precise float temp_155;
    int temp_156;
    uint temp_157;
    uint temp_158;
    int temp_159;
    precise float temp_160;
    int temp_161;
    uint temp_162;
    int temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
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
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C9807980CC70001 Mov
    // 0x000010: 0xEFD87F800807FF05 Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4C9807980CD70002 Mov
    // 0x000028: 0xEFD87F800847FF06 Ald
    temp_1 = in_attr0.y;
    // 0x000030: 0x4C9807980CE70003 Mov
    // 0x000038: 0xEFD87F800887FF00 Ald
    temp_2 = in_attr0.z;
    // 0x000048: 0x4C6810180CC70101 Fmul
    temp_3 = vp_c6.data[51].x * vp_c6.data[51].x;
    // 0x000050: 0xEFD87F801047FF0B Ald
    temp_4 = in_attr8.y;
    // 0x000058: 0x4C98079C23070010 Mov
    // 0x000068: 0xEFD87F800987FF16 Ald
    temp_5 = in_attr1.z;
    // 0x000070: 0x4C98079400270018 Mov
    // 0x000078: 0x49A000980CD70201 Ffma
    temp_6 = fma(vp_c6.data[51].y, vp_c6.data[51].y, temp_3);
    // 0x000088: 0x4C98079400370019 Mov
    // 0x000090: 0x49A000980CE70303 Ffma
    temp_7 = fma(vp_c6.data[51].z, vp_c6.data[51].z, temp_6);
    // 0x000098: 0x4C68101000470501 Fmul
    temp_8 = temp_0 * vp_c4.data[1].x;
    // 0x0000A8: 0x5080000000570303 Mufu
    temp_9 = inversesqrt(temp_7);
    // 0x0000B0: 0x4C68101000070507 Fmul
    temp_10 = temp_0 * vp_c4.data[0].x;
    // 0x0000B8: 0x4C68101000870504 Fmul
    temp_11 = temp_0 * vp_c4.data[2].x;
    // 0x0000C8: 0x49A0009000570601 Ffma
    temp_12 = fma(temp_1, vp_c4.data[1].y, temp_8);
    // 0x0000D0: 0x49A0039000170609 Ffma
    temp_13 = fma(temp_1, vp_c4.data[0].y, temp_10);
    // 0x0000D8: 0x49A0021000970607 Ffma
    temp_14 = fma(temp_1, vp_c4.data[2].y, temp_11);
    // 0x0000E8: 0x49A0009000670001 Ffma
    temp_15 = fma(temp_2, vp_c4.data[1].z, temp_12);
    // 0x0000F0: 0x4C6810180CC70302 Fmul
    temp_16 = temp_9 * vp_c6.data[51].x;
    // 0x0000F8: 0x49A0049000270008 Ffma
    temp_17 = fma(temp_2, vp_c4.data[0].z, temp_13);
    // 0x000108: 0x49A0039000A70004 Ffma
    temp_18 = fma(temp_2, vp_c4.data[2].z, temp_14);
    // 0x000110: 0x4C5810100077010E Fadd
    temp_19 = temp_15 + vp_c4.data[1].w;
    // 0x000118: 0x4C6810180CE70301 Fmul
    temp_20 = temp_9 * vp_c6.data[51].z;
    // 0x000128: 0x49A101180CF70209 Ffma
    temp_21 = 0.0 - vp_c6.data[51].w;
    temp_22 = fma(temp_16, temp_21, temp_16);
    // 0x000130: 0x4C58101000370808 Fadd
    temp_23 = temp_17 + vp_c4.data[0].w;
    // 0x000138: 0x4C58101000B70404 Fadd
    temp_24 = temp_18 + vp_c4.data[2].w;
    // 0x000148: 0x4C6810180CD70303 Fmul
    temp_25 = temp_9 * vp_c6.data[51].y;
    // 0x000150: 0x4C68101409670E0A Fmul
    temp_26 = temp_19 * vp_c5.data[37].z;
    // 0x000158: 0x49A100980CF70107 Ffma
    temp_27 = 0.0 - vp_c6.data[51].w;
    temp_28 = fma(temp_20, temp_27, temp_20);
    // 0x000168: 0x1E23DCCCCCD70909 Fmul32i
    temp_29 = temp_22 * 0.100000001;
    // 0x000170: 0x4C58301000770E0C Fadd
    temp_30 = 0.0 - vp_c4.data[1].w;
    temp_31 = temp_19 + temp_30;
    // 0x000178: 0x1E23DCCCCCD70707 Fmul32i
    temp_32 = temp_28 * 0.100000001;
    // 0x000188: 0x59A1050000970809 Ffma
    temp_33 = 0.0 - temp_29;
    temp_34 = fma(temp_23, temp_33, temp_26);
    // 0x000190: 0x59A0048000770407 Ffma
    temp_35 = fma(temp_24, temp_32, temp_34);
    // 0x000198: 0x4C58301000B70409 Fadd
    temp_36 = 0.0 - vp_c4.data[2].w;
    temp_37 = temp_24 + temp_36;
    // 0x0001A8: 0x32A003BF00071010 Ffma
    temp_38 = fma(vp_c7.data[140].x, 0.5, temp_35);
    // 0x0001B0: 0x4C58301000370807 Fadd
    temp_39 = 0.0 - vp_c4.data[0].w;
    temp_40 = temp_23 + temp_39;
    // 0x0001B8: 0x59A206000097FF0F Ffma
    temp_41 = 0.0 - temp_31;
    temp_42 = fma(0.0, temp_37, temp_41);
    // 0x0001C8: 0x5C90000001070013 Rro
    // 0x0001D0: 0x386810404007100A Fmul
    temp_43 = temp_38 * 3.0;
    // 0x0001D8: 0x5080000000071313 Mufu
    temp_44 = cos(temp_38);
    // 0x0001E8: 0x5C6910000077FF0D Fmul
    temp_45 = 0.0 - temp_40;
    temp_46 = 0.0 * temp_45;
    // 0x0001F0: 0x59A103800097FF11 Ffma
    temp_47 = 0.0 - temp_37;
    temp_48 = fma(0.0, temp_47, temp_40);
    // 0x0001F8: 0xEFD87F800907FF07 Ald
    temp_49 = in_attr1.x;
    // 0x000208: 0x38681040A0071014 Fmul
    temp_50 = temp_38 * 5.0;
    // 0x000210: 0xEFD87F800A07FF09 Ald
    temp_51 = in_attr2.x;
    // 0x000218: 0x5C90000000A7000A Rro
    // 0x000228: 0x5C68100000F70212 Fmul
    temp_52 = temp_16 * temp_42;
    // 0x000230: 0x5080000000070A0A Mufu
    temp_53 = cos(temp_43);
    // 0x000238: 0x59A0068000C7FF0C Ffma
    temp_54 = fma(0.0, temp_31, temp_46);
    // 0x000248: 0x4C68101409771015 Fmul
    temp_55 = temp_38 * vp_c5.data[37].w;
    // 0x000250: 0xEFD87F800947FF10 Ald
    temp_56 = in_attr1.y;
    // 0x000258: 0x5C9000000147000D Rro
    // 0x000268: 0x5C68100001371313 Fmul
    temp_57 = temp_44 * temp_44;
    // 0x000270: 0x5080000000070D0D Mufu
    temp_58 = cos(temp_50);
    // 0x000278: 0x59A009000117030F Ffma
    temp_59 = fma(temp_25, temp_48, temp_52);
    // 0x000288: 0xEFD87F800A47FF11 Ald
    temp_60 = in_attr2.y;
    // 0x000290: 0x5C90000001570012 Rro
    // 0x000298: 0x5C68100000570514 Fmul
    temp_61 = temp_0 * temp_0;
    // 0x0002A8: 0x5080000000171212 Mufu
    temp_62 = sin(temp_55);
    // 0x0002B0: 0x51A00C9400570B05 Ffma
    temp_63 = fma(temp_4, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x0002B8: 0x5C68100000A71313 Fmul
    temp_64 = temp_57 * temp_53;
    // 0x0002C8: 0x51A00C1400470B0A Ffma
    temp_65 = fma(temp_4, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x0002D0: 0x59A0078000C7010B Ffma
    temp_66 = fma(temp_20, temp_54, temp_59);
    // 0x0002D8: 0xEFD87F801007FF0F Ald
    temp_67 = in_attr8.x;
    // 0x0002E8: 0x4C9807980CF70018 Mov
    // 0x0002F0: 0x4C68101000470715 Fmul
    temp_68 = temp_49 * vp_c4.data[1].x;
    // 0x0002F8: 0x59A00A0000670606 Ffma
    temp_69 = fma(temp_1, temp_1, temp_61);
    // 0x000308: 0x5C68120000D7130C Fmul
    temp_70 = temp_64 * 0.5;
    temp_71 = temp_70 * temp_58;
    // 0x000310: 0xEFD87F800A87FF0D Ald
    temp_72 = in_attr2.z;
    // 0x000318: 0x4C68101000870713 Fmul
    temp_73 = temp_49 * vp_c4.data[2].x;
    // 0x000328: 0x4C68101000070717 Fmul
    temp_74 = temp_49 * vp_c4.data[0].x;
    // 0x000330: 0x4C68101000870907 Fmul
    temp_75 = temp_51 * vp_c4.data[2].x;
    // 0x000338: 0x1E23DCCCCCD71212 Fmul32i
    temp_76 = temp_62 * 0.100000001;
    // 0x000348: 0x4C68101000070914 Fmul
    temp_77 = temp_51 * vp_c4.data[0].x;
    // 0x000350: 0x4C6810100047091A Fmul
    temp_78 = temp_51 * vp_c4.data[1].x;
    // 0x000358: 0x49A00A9000571009 Ffma
    temp_79 = fma(temp_56, vp_c4.data[1].y, temp_68);
    // 0x000368: 0x4C68101409571815 Fmul
    temp_80 = vp_c6.data[51].w * vp_c5.data[37].y;
    // 0x000370: 0x49A0099000971013 Ffma
    temp_81 = fma(temp_56, vp_c4.data[2].y, temp_73);
    // 0x000378: 0x59A0090000C70B0B Ffma
    temp_82 = fma(temp_66, temp_71, temp_76);
    // 0x000388: 0x4CB0119002371A12 F2i
    temp_83 = trunc(vp_c4.data[8].w);
    temp_84 = int(temp_83);
    // 0x000390: 0x49A00B9000171017 Ffma
    temp_85 = fma(temp_56, vp_c4.data[0].y, temp_74);
    // 0x000398: 0x49A00A1000171118 Ffma
    temp_86 = fma(temp_60, vp_c4.data[0].y, temp_77);
    // 0x0003A8: 0x59A0030000070014 Ffma
    temp_87 = fma(temp_2, temp_2, temp_69);
    // 0x0003B0: 0x49A0039000971110 Ffma
    temp_88 = fma(temp_60, vp_c4.data[2].y, temp_75);
    // 0x0003B8: 0x5080000000871414 Mufu
    temp_89 = sqrt(temp_87);
    // 0x0003C8: 0x5C68100000B7150B Fmul
    temp_90 = temp_80 * temp_82;
    // 0x0003D0: 0x49A0099000A71600 Ffma
    temp_91 = fma(temp_5, vp_c4.data[2].z, temp_81);
    // 0x0003D8: 0x49A00B9000271617 Ffma
    temp_92 = fma(temp_5, vp_c4.data[0].z, temp_85);
    // 0x0003E8: 0x49A0049000671616 Ffma
    temp_93 = fma(temp_5, vp_c4.data[1].z, temp_79);
    // 0x0003F0: 0x49A00D1000571107 Ffma
    temp_94 = fma(temp_60, vp_c4.data[1].y, temp_78);
    // 0x0003F8: 0x4C98079000B70011 Mov
    // 0x000408: 0x49A0051400070F0A Ffma
    temp_95 = fma(temp_67, vp_c5.data[0].x, temp_65);
    // 0x000410: 0x5C90000000B70019 Rro
    // 0x000418: 0x49A00C1000270D06 Ffma
    temp_96 = fma(temp_72, vp_c4.data[0].z, temp_86);
    // 0x000428: 0x5080000000171909 Mufu
    temp_97 = sin(temp_90);
    // 0x000430: 0x5C68100001771713 Fmul
    temp_98 = temp_92 * temp_92;
    // 0x000438: 0x508000000007190B Mufu
    temp_99 = cos(temp_90);
    // 0x000448: 0x49A0039000670D07 Ffma
    temp_100 = fma(temp_72, vp_c4.data[1].z, temp_94);
    // 0x000450: 0x49A0081000A70D0D Ffma
    temp_101 = fma(temp_72, vp_c4.data[2].z, temp_88);
    // 0x000458: 0x4C59101000B71111 Fadd
    temp_102 = 0.0 - vp_c4.data[2].w;
    temp_103 = temp_102 + vp_c4.data[2].w;
    // 0x000468: 0x49A0029400170F05 Ffma
    temp_104 = fma(temp_67, vp_c5.data[0].y, temp_63);
    // 0x000470: 0x5C68100000670618 Fmul
    temp_105 = temp_96 * temp_96;
    // 0x000478: 0x59A0098001671613 Ffma
    temp_106 = fma(temp_93, temp_93, temp_98);
    // 0x000488: 0x384800000047120F Shl
    temp_107 = temp_84 << 4;
    // 0x000490: 0x5C68100001470212 Fmul
    temp_108 = temp_16 * temp_89;
    // 0x000498: 0x59A00C0000770718 Ffma
    temp_109 = fma(temp_100, temp_100, temp_105);
    // 0x0004A8: 0x4C69101000770910 Fmul
    temp_110 = 0.0 - vp_c4.data[1].w;
    temp_111 = temp_97 * temp_110;
    // 0x0004B0: 0x59A009800007001D Ffma
    temp_112 = fma(temp_91, temp_91, temp_106);
    // 0x0004B8: 0x5C68100001470313 Fmul
    temp_113 = temp_25 * temp_89;
    // 0x0004C8: 0x5080000000571D1D Mufu
    temp_114 = inversesqrt(temp_112);
    // 0x0004D0: 0x4C68101000770B02 Fmul
    temp_115 = temp_99 * vp_c4.data[1].w;
    // 0x0004D8: 0x5C68100001470103 Fmul
    temp_116 = temp_20 * temp_89;
    // 0x0004E8: 0xEF94007048870F14 Ldc
    temp_117 = temp_107 + 0x488;
    temp_118 = uint(temp_117) >> 2;
    temp_119 = temp_118 >> 2;
    temp_120 = int(temp_118) & 3;
    temp_121 = vp_c7.data[int(temp_119)][temp_120];
    // 0x0004F0: 0x59A00C0000D70D1B Ffma
    temp_122 = fma(temp_101, temp_101, temp_109);
    // 0x0004F8: 0x5C58100001170401 Fadd
    temp_123 = temp_24 + temp_103;
    // 0x000508: 0xEF94007068870F11 Ldc
    temp_124 = temp_107 + 0x688;
    temp_125 = uint(temp_124) >> 2;
    temp_126 = temp_125 >> 2;
    temp_127 = int(temp_125) & 3;
    temp_128 = vp_c7.data[int(temp_126)][temp_127];
    // 0x000510: 0x49A3081000370B18 Ffma
    temp_129 = 0.0 - vp_c4.data[0].w;
    temp_130 = 0.0 - temp_111;
    temp_131 = fma(temp_99, temp_129, temp_130);
    // 0x000518: 0x5080000000571B10 Mufu
    temp_132 = inversesqrt(temp_122);
    // 0x000528: 0x5C68100001271512 Fmul
    temp_133 = temp_80 * temp_108;
    // 0x000530: 0x49A3011000370919 Ffma
    temp_134 = 0.0 - vp_c4.data[0].w;
    temp_135 = 0.0 - temp_115;
    temp_136 = fma(temp_97, temp_134, temp_135);
    // 0x000538: 0x5C68100001371513 Fmul
    temp_137 = temp_80 * temp_113;
    // 0x000548: 0x5C68100000371515 Fmul
    temp_138 = temp_80 * temp_116;
    // 0x000550: 0x59A0008000E7FF01 Ffma
    temp_139 = fma(0.0, temp_19, temp_123);
    // 0x000558: 0x4C58101000371802 Fadd
    temp_140 = temp_131 + vp_c4.data[0].w;
    // 0x000568: 0xEFD87F800AC7FF18 Ald
    temp_141 = in_attr2.w;
    // 0x000570: 0x4C58101000771919 Fadd
    temp_142 = temp_136 + vp_c4.data[1].w;
    // 0x000578: 0xEFF07F800E47FF05 Ast
    out_attr6.y = temp_104;
    // 0x000588: 0x5C68100001D7001A Fmul
    temp_143 = temp_91 * temp_114;
    // 0x000590: 0xEFF07F800E07FF0A Ast
    out_attr6.x = temp_95;
    // 0x000598: 0x59A100800087FF1B Ffma
    temp_144 = 0.0 - temp_23;
    temp_145 = fma(0.0, temp_144, temp_139);
    // 0x0005A8: 0xEF95007048070F00 Ldc
    temp_146 = temp_107 + 0x480;
    temp_147 = uint(temp_146) >> 2;
    temp_148 = temp_147 >> 2;
    temp_149 = int(temp_147) & 3;
    temp_150 = vp_c7.data[int(temp_148)][temp_149];
    temp_151 = int(temp_147) + 1;
    temp_152 = uint(temp_151) >> 2;
    temp_153 = temp_151 & 3;
    temp_154 = vp_c7.data[int(temp_152)][temp_153];
    // 0x0005B0: 0x59A001000047FF1C Ffma
    temp_155 = fma(0.0, temp_24, temp_140);
    // 0x0005B8: 0xEF95007068070F02 Ldc
    temp_156 = temp_107 + 0x680;
    temp_157 = uint(temp_156) >> 2;
    temp_158 = temp_157 >> 2;
    temp_159 = int(temp_157) & 3;
    temp_160 = vp_c7.data[int(temp_158)][temp_159];
    temp_161 = int(temp_157) + 1;
    temp_162 = uint(temp_161) >> 2;
    temp_163 = temp_161 & 3;
    temp_164 = vp_c7.data[int(temp_162)][temp_163];
    // 0x0005C8: 0x5C68100001D71717 Fmul
    temp_165 = temp_92 * temp_114;
    // 0x0005D0: 0xEFF07F800887FF1A Ast
    out_attr0.z = temp_143;
    // 0x0005D8: 0x5C68100001D71616 Fmul
    temp_166 = temp_93 * temp_114;
    // 0x0005E8: 0xEFF07F800807FF17 Ast
    out_attr0.x = temp_165;
    // 0x0005F0: 0x59A00C800047FF1D Ffma
    temp_167 = fma(0.0, temp_24, temp_142);
    // 0x0005F8: 0xEFF07F800847FF16 Ast
    out_attr0.y = temp_166;
    // 0x000608: 0x5C68100001070619 Fmul
    temp_168 = temp_96 * temp_132;
    // 0x000610: 0x59A10E0000970E06 Ffma
    temp_169 = 0.0 - temp_97;
    temp_170 = fma(temp_19, temp_169, temp_155);
    // 0x000618: 0xEFF07F800907FF19 Ast
    out_attr1.x = temp_168;
    // 0x000628: 0x5C68100001070704 Fmul
    temp_171 = temp_100 * temp_132;
    // 0x000630: 0x59A00E8000B70E0E Ffma
    temp_172 = fma(temp_19, temp_99, temp_167);
    // 0x000638: 0xEFF07F800947FF04 Ast
    out_attr1.y = temp_171;
    // 0x000648: 0x5C68100001270C07 Fmul
    temp_173 = temp_71 * temp_133;
    // 0x000650: 0x59A0030000B70806 Ffma
    temp_174 = fma(temp_23, temp_99, temp_170);
    // 0x000658: 0x5C68100001570C15 Fmul
    temp_175 = temp_71 * temp_138;
    // 0x000668: 0x5C68100001370C13 Fmul
    temp_176 = temp_71 * temp_137;
    // 0x000670: 0x5C68100001070D0D Fmul
    temp_177 = temp_101 * temp_132;
    // 0x000678: 0x59A007000097080E Ffma
    temp_178 = fma(temp_23, temp_97, temp_172);
    // 0x000688: 0xEFF07F800987FF0D Ast
    out_attr1.z = temp_177;
    // 0x000690: 0x49A0030400070707 Ffma
    temp_179 = fma(temp_173, vp_c1.data[0].x, temp_174);
    // 0x000698: 0x49A00D840007151B Ffma
    temp_180 = fma(temp_175, vp_c1.data[0].x, temp_145);
    // 0x0006A8: 0x5C68100001671905 Fmul
    temp_181 = temp_168 * temp_166;
    // 0x0006B0: 0x5C68100001A70408 Fmul
    temp_182 = temp_171 * temp_143;
    // 0x0006B8: 0x5C68100001770D0B Fmul
    temp_183 = temp_177 * temp_165;
    // 0x0006C8: 0x49A007040007130E Ffma
    temp_184 = fma(temp_176, vp_c1.data[0].x, temp_178);
    // 0x0006D0: 0x59A0010000070700 Ffma
    temp_185 = fma(temp_179, temp_150, temp_160);
    // 0x0006D8: 0x59A0088001471B11 Ffma
    temp_186 = fma(temp_180, temp_121, temp_128);
    // 0x0006E8: 0xEFF07F800D07FF00 Ast
    out_attr5.x = temp_185;
    // 0x0006F0: 0x59A2028001770409 Ffma
    temp_187 = 0.0 - temp_181;
    temp_188 = fma(temp_171, temp_165, temp_187);
    // 0x0006F8: 0xEFF07F800D87FF11 Ast
    out_attr5.z = temp_186;
    // 0x000708: 0x59A0018000170E05 Ffma
    temp_189 = fma(temp_184, temp_154, temp_164);
    // 0x000710: 0x4C68100C00070002 Fmul
    temp_190 = temp_185 * vp_c3.data[0].x;
    // 0x000718: 0xEFF07F800D47FF05 Ast
    out_attr5.y = temp_189;
    // 0x000728: 0x59A2040001670D16 Ffma
    temp_191 = 0.0 - temp_182;
    temp_192 = fma(temp_177, temp_166, temp_191);
    // 0x000730: 0x59A2058001A7190B Ffma
    temp_193 = 0.0 - temp_183;
    temp_194 = fma(temp_168, temp_143, temp_193);
    // 0x000738: 0x4C5810180BA71106 Fadd
    temp_195 = temp_186 + vp_c6.data[46].z;
    // 0x000748: 0x4C68100C00470004 Fmul
    temp_196 = temp_185 * vp_c3.data[1].x;
    // 0x000750: 0x4C5810180B970501 Fadd
    temp_197 = temp_189 + vp_c6.data[46].y;
    // 0x000758: 0x49A0010C00170507 Ffma
    temp_198 = fma(temp_189, vp_c3.data[0].y, temp_190);
    // 0x000768: 0x5C68100001871616 Fmul
    temp_199 = temp_192 * temp_141;
    // 0x000770: 0x5C68100001870B0B Fmul
    temp_200 = temp_194 * temp_141;
    // 0x000778: 0xEFF07F800A07FF16 Ast
    out_attr2.x = temp_199;
    // 0x000788: 0x4C6810180C270603 Fmul
    temp_201 = temp_195 * vp_c6.data[48].z;
    // 0x000790: 0xEFF07F800A47FF0B Ast
    out_attr2.y = temp_200;
    // 0x000798: 0x5C68100001870918 Fmul
    temp_202 = temp_188 * temp_141;
    // 0x0007A8: 0x4C6810180C670608 Fmul
    temp_203 = temp_195 * vp_c6.data[49].z;
    // 0x0007B0: 0xEFF07F800A87FF18 Ast
    out_attr2.z = temp_202;
    // 0x0007B8: 0x49A0020C0057050A Ffma
    temp_204 = fma(temp_189, vp_c3.data[1].y, temp_196);
    // 0x0007C8: 0x49A0038C00271109 Ffma
    temp_205 = fma(temp_186, vp_c3.data[0].z, temp_198);
    // 0x0007D0: 0x4C58101002071104 Fadd
    temp_206 = temp_186 + vp_c4.data[8].x;
    // 0x0007D8: 0x49A001980C170102 Ffma
    temp_207 = fma(temp_197, vp_c6.data[48].y, temp_201);
    // 0x0007E8: 0x4C6810180CA70606 Fmul
    temp_208 = temp_195 * vp_c6.data[50].z;
    // 0x0007F0: 0x49A004180C570103 Ffma
    temp_209 = fma(temp_197, vp_c6.data[49].y, temp_203);
    // 0x0007F8: 0x49A0050C00671108 Ffma
    temp_210 = fma(temp_186, vp_c3.data[1].z, temp_204);
    // 0x000808: 0x4C58100C0037090B Fadd
    temp_211 = temp_205 + vp_c3.data[0].w;
    // 0x000810: 0x4C5830180B07000C Fadd
    temp_212 = 0.0 - vp_c6.data[44].x;
    temp_213 = temp_185 + temp_212;
    // 0x000818: 0x49A0038C00270407 Ffma
    temp_214 = fma(temp_206, vp_c3.data[0].z, temp_198);
    // 0x000828: 0x49A003180C970101 Ffma
    temp_215 = fma(temp_197, vp_c6.data[50].y, temp_208);
    // 0x000830: 0x4C68100C00870006 Fmul
    temp_216 = temp_185 * vp_c3.data[2].x;
    // 0x000838: 0x4C58100C00770809 Fadd
    temp_217 = temp_210 + vp_c3.data[1].w;
    // 0x000848: 0x4C68101802C70B0B Fmul
    temp_218 = temp_211 * vp_c6.data[11].x;
    // 0x000850: 0x4C5830180B17050D Fadd
    temp_219 = 0.0 - vp_c6.data[44].y;
    temp_220 = temp_189 + temp_219;
    // 0x000858: 0x4C68101803870C0C Fmul
    temp_221 = temp_213 * vp_c6.data[14].x;
    // 0x000868: 0x4C5810180B870008 Fadd
    temp_222 = temp_185 + vp_c6.data[46].x;
    // 0x000870: 0x49A0050C0067040A Ffma
    temp_223 = fma(temp_206, vp_c3.data[1].z, temp_204);
    // 0x000878: 0x4C58100C00370707 Fadd
    temp_224 = temp_214 + vp_c3.data[0].w;
    // 0x000888: 0x49A0030C00970506 Ffma
    temp_225 = fma(temp_189, vp_c3.data[2].y, temp_216);
    // 0x000890: 0x4C58300C0337050E Fadd
    temp_226 = 0.0 - vp_c3.data[12].w;
    temp_227 = temp_189 + temp_226;
    // 0x000898: 0x49A0059802D70909 Ffma
    temp_228 = fma(temp_217, vp_c6.data[11].y, temp_218);
    // 0x0008A8: 0xEFF07F800B47FF0E Ast
    out_attr3.y = temp_227;
    // 0x0008B0: 0x49A0061803970D0C Ffma
    temp_229 = fma(temp_220, vp_c6.data[14].y, temp_221);
    // 0x0008B8: 0x4C5830180B271105 Fadd
    temp_230 = 0.0 - vp_c6.data[44].z;
    temp_231 = temp_186 + temp_230;
    // 0x0008C8: 0x4C58300C02F7000B Fadd
    temp_232 = 0.0 - vp_c3.data[11].w;
    temp_233 = temp_185 + temp_232;
    // 0x0008D0: 0x49A000980C870801 Ffma
    temp_234 = fma(temp_222, vp_c6.data[50].x, temp_215);
    // 0x0008D8: 0xEFF07F800B07FF0B Ast
    out_attr3.x = temp_233;
    // 0x0008E8: 0x49A001980C470803 Ffma
    temp_235 = fma(temp_222, vp_c6.data[49].x, temp_209);
    // 0x0008F0: 0x4C58100C00770A0A Fadd
    temp_236 = temp_223 + vp_c3.data[1].w;
    // 0x0008F8: 0x4C68100C02470700 Fmul
    temp_237 = temp_224 * vp_c3.data[9].x;
    // 0x000908: 0x49A001180C070802 Ffma
    temp_238 = fma(temp_222, vp_c6.data[48].x, temp_207);
    // 0x000910: 0x49A0061803A7050C Ffma
    temp_239 = fma(temp_231, vp_c6.data[14].z, temp_229);
    // 0x000918: 0x4C6810180BB70108 Fmul
    temp_240 = temp_234 * vp_c6.data[46].w;
    // 0x000928: 0x49A0030C00A70404 Ffma
    temp_241 = fma(temp_206, vp_c3.data[2].z, temp_225);
    // 0x000930: 0xEFF07F801187FF08 Ast
    out_attr9.z = temp_240;
    // 0x000938: 0x4C6810180BB70305 Fmul
    temp_242 = temp_235 * vp_c6.data[46].w;
    // 0x000948: 0x49A0000C02570A01 Ffma
    temp_243 = fma(temp_236, vp_c3.data[9].y, temp_237);
    // 0x000950: 0xEFF07F801147FF05 Ast
    out_attr9.y = temp_242;
    // 0x000958: 0x49A0030C00A71106 Ffma
    temp_244 = fma(temp_186, vp_c3.data[2].z, temp_225);
    // 0x000968: 0x4C68100C01C70703 Fmul
    temp_245 = temp_224 * vp_c3.data[7].x;
    // 0x000970: 0x4C68100C02870700 Fmul
    temp_246 = temp_224 * vp_c3.data[10].x;
    // 0x000978: 0x4C68100C02070707 Fmul
    temp_247 = temp_224 * vp_c3.data[8].x;
    // 0x000988: 0x4C6810180BB70202 Fmul
    temp_248 = temp_238 * vp_c6.data[46].w;
    // 0x000990: 0x4C58100C00B70404 Fadd
    temp_249 = temp_241 + vp_c3.data[2].w;
    // 0x000998: 0xEFF07F801107FF02 Ast
    out_attr9.x = temp_248;
    // 0x0009A8: 0x4C58100C00B70606 Fadd
    temp_250 = temp_244 + vp_c3.data[2].w;
    // 0x0009B0: 0x49A0018C01D70A03 Ffma
    temp_251 = fma(temp_236, vp_c3.data[7].y, temp_245);
    // 0x0009B8: 0xEFF07F800C87FF06 Ast
    out_attr4.z = temp_250;
    // 0x0009C8: 0x49A0038C02170A07 Ffma
    temp_252 = fma(temp_236, vp_c3.data[8].y, temp_247);
    // 0x0009D0: 0x49A0049802E70609 Ffma
    temp_253 = fma(temp_250, vp_c6.data[11].z, temp_228);
    // 0x0009D8: 0x49A0000C02970A02 Ffma
    temp_254 = fma(temp_236, vp_c3.data[10].y, temp_246);
    // 0x0009E8: 0x4C98079803C7000D Mov
    // 0x0009F0: 0x49A0008C02670401 Ffma
    temp_255 = fma(temp_249, vp_c3.data[9].z, temp_243);
    // 0x0009F8: 0x49A0018C01E70403 Ffma
    temp_256 = fma(temp_249, vp_c3.data[7].z, temp_251);
    // 0x000A08: 0x49A0038C02270407 Ffma
    temp_257 = fma(temp_249, vp_c3.data[8].z, temp_252);
    // 0x000A10: 0x4C98079803070006 Mov
    // 0x000A18: 0x49A0010C02A70402 Ffma
    temp_258 = fma(temp_249, vp_c3.data[10].z, temp_254);
    // 0x000A28: 0x4C58300C0377110F Fadd
    temp_259 = 0.0 - vp_c3.data[13].w;
    temp_260 = temp_186 + temp_259;
    // 0x000A30: 0x51A0069803B70C0C Ffma
    temp_261 = fma(temp_239, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000A38: 0xEFF07F800B87FF0F Ast
    out_attr3.z = temp_260;
    // 0x000A48: 0x51A0031802F70909 Ffma
    temp_262 = fma(temp_253, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000A50: 0xEFF07F801047FF0C Ast
    out_attr8.y = temp_261;
    // 0x000A58: 0x4C58100C02770101 Fadd
    temp_263 = temp_255 + vp_c3.data[9].w;
    // 0x000A68: 0xEFF07F801007FF09 Ast
    out_attr8.x = temp_262;
    // 0x000A70: 0x4C58100C01F70303 Fadd
    temp_264 = temp_256 + vp_c3.data[7].w;
    // 0x000A78: 0xEFF07F800787FF01 Ast
    gl_Position.z = temp_263;
    // 0x000A88: 0x4C58100C02B70202 Fadd
    temp_265 = temp_258 + vp_c3.data[10].w;
    // 0x000A90: 0xEFF07F800707FF03 Ast
    gl_Position.x = temp_264;
    // 0x000A98: 0x4C58100C02370707 Fadd
    temp_266 = temp_257 + vp_c3.data[8].w;
    // 0x000AA8: 0xEFF07F8007C7FF02 Ast
    gl_Position.w = temp_265;
    // 0x000AB0: 0xEFF07F800747FF07 Ast
    gl_Position.y = temp_266;
    // 0x000AB8: 0xE30000000007000F Exit
    return;
}
