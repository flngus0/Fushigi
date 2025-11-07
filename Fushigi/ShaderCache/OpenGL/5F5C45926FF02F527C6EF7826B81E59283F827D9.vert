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

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 2, std140) uniform _vp_c1
{
    precise vec4 data[4096];
} vp_c1;

layout (binding = 0) uniform sampler2D vp_t_cb7_2A;
layout (location = 0) in vec4 in_attr0;
layout (location = 8) in vec4 in_attr8;
layout (location = 12) in vec4 in_attr12;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;


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
    precise vec4 temp_35;
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
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
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
    precise float temp_126;
    precise float temp_127;
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
    int temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    int temp_150;
    precise float temp_151;
    int temp_152;
    uint temp_153;
    uint temp_154;
    int temp_155;
    precise float temp_156;
    precise float temp_157;
    int temp_158;
    uint temp_159;
    uint temp_160;
    int temp_161;
    precise float temp_162;
    precise float temp_163;
    int temp_164;
    uint temp_165;
    uint temp_166;
    int temp_167;
    precise float temp_168;
    int temp_169;
    uint temp_170;
    int temp_171;
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
    int temp_190;
    uint temp_191;
    uint temp_192;
    int temp_193;
    precise float temp_194;
    int temp_195;
    uint temp_196;
    int temp_197;
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
    precise float temp_271;
    precise float temp_272;
    precise float temp_273;
    precise float temp_274;
    precise float temp_275;
    precise float temp_276;
    precise float temp_277;
    precise float temp_278;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x0103F0000007F010 Mov32i
    // 0x000010: 0xEFD87F801407FF0F Ald
    temp_0 = in_attr12.x;
    // 0x000018: 0x4C9807980D370004 Mov
    // 0x000028: 0xEFD87F801447FF0E Ald
    temp_1 = in_attr12.y;
    // 0x000030: 0x4C9807980CD70005 Mov
    // 0x000038: 0xEFD87F801487FF0C Ald
    temp_2 = in_attr12.z;
    // 0x000048: 0x4C68101000070F00 Fmul
    temp_3 = temp_0 * vp_c4.data[0].x;
    // 0x000050: 0x4C68101000470F03 Fmul
    temp_4 = temp_0 * vp_c4.data[1].x;
    // 0x000058: 0x49A0001000170E01 Ffma
    temp_5 = fma(temp_1, vp_c4.data[0].y, temp_3);
    // 0x000068: 0x4C68101000870F00 Fmul
    temp_6 = temp_0 * vp_c4.data[2].x;
    // 0x000070: 0x49A0019000570E03 Ffma
    temp_7 = fma(temp_1, vp_c4.data[1].y, temp_4);
    // 0x000078: 0x49A0009000270C08 Ffma
    temp_8 = fma(temp_2, vp_c4.data[0].z, temp_5);
    // 0x000088: 0x49A0001000970E01 Ffma
    temp_9 = fma(temp_1, vp_c4.data[2].y, temp_6);
    // 0x000090: 0x49A0019000670C03 Ffma
    temp_10 = fma(temp_2, vp_c4.data[1].z, temp_7);
    // 0x000098: 0x4C58101000370808 Fadd
    temp_11 = temp_8 + vp_c4.data[0].w;
    // 0x0000A8: 0x49A0009000A70C01 Ffma
    temp_12 = fma(temp_2, vp_c4.data[2].z, temp_9);
    // 0x0000B0: 0x4C58101000770307 Fadd
    temp_13 = temp_10 + vp_c4.data[1].w;
    // 0x0000B8: 0x4C68100C01870800 Fmul
    temp_14 = temp_11 * vp_c3.data[6].x;
    // 0x0000C8: 0x4C58101000B7010D Fadd
    temp_15 = temp_12 + vp_c4.data[2].w;
    // 0x0000D0: 0x4C68100C01070801 Fmul
    temp_16 = temp_11 * vp_c3.data[4].x;
    // 0x0000D8: 0x49A0000C01970702 Ffma
    temp_17 = fma(temp_13, vp_c3.data[6].y, temp_14);
    // 0x0000E8: 0x4C68100C00C70800 Fmul
    temp_18 = temp_11 * vp_c3.data[3].x;
    // 0x0000F0: 0x49A0010C01A70D03 Ffma
    temp_19 = fma(temp_15, vp_c3.data[6].z, temp_17);
    // 0x0000F8: 0x49A0000C00D70700 Ffma
    temp_20 = fma(temp_13, vp_c3.data[3].y, temp_18);
    // 0x000108: 0x49A0008C01170702 Ffma
    temp_21 = fma(temp_13, vp_c3.data[4].y, temp_16);
    // 0x000110: 0x4C58100C01B70303 Fadd
    temp_22 = temp_19 + vp_c3.data[6].w;
    // 0x000118: 0x49A0000C00E70D00 Ffma
    temp_23 = fma(temp_15, vp_c3.data[3].z, temp_20);
    // 0x000128: 0x5080000000470303 Mufu
    temp_24 = 1.0 / temp_22;
    // 0x000130: 0x49A0010C01270D02 Ffma
    temp_25 = fma(temp_15, vp_c3.data[4].z, temp_21);
    // 0x000138: 0x4C58100C00F70000 Fadd
    temp_26 = temp_23 + vp_c3.data[3].w;
    // 0x000148: 0x4C58100C01370202 Fadd
    temp_27 = temp_25 + vp_c3.data[4].w;
    // 0x000150: 0x5C68100000370001 Fmul
    temp_28 = temp_26 * temp_24;
    // 0x000158: 0x5C69100000370202 Fmul
    temp_29 = 0.0 - temp_24;
    temp_30 = temp_27 * temp_29;
    // 0x000168: 0x4C9807980D270000 Mov
    // 0x000170: 0x4C98079C02A70003 Mov
    // 0x000178: 0x32A0083F00070101 Ffma
    temp_31 = fma(temp_28, 0.5, 0.5);
    // 0x000188: 0x32A0083F00070202 Ffma
    temp_32 = fma(temp_30, 0.5, 0.5);
    // 0x000190: 0x51A000180D070100 Ffma
    temp_33 = fma(temp_31, vp_c6.data[52].z, vp_c6.data[52].x);
    // 0x000198: 0x51A002180D170201 Ffma
    temp_34 = fma(temp_32, vp_c6.data[52].w, vp_c6.data[52].y);
    // 0x0001A8: 0xDEB80007A0370000 TexB
    temp_35 = texture(vp_t_cb7_2A, vec2(temp_33, temp_34)).xyzw;
    temp_36 = temp_35.x;
    temp_37 = temp_35.y;
    temp_38 = temp_35.z;
    temp_39 = temp_35.w;
    // 0x0001B0: 0xEFD87F800807FF11 Ald
    temp_40 = in_attr0.x;
    // 0x0001B8: 0x4C9807980CC70004 Mov
    // 0x0001C8: 0xEFD87F800847FF13 Ald
    temp_41 = in_attr0.y;
    // 0x0001D0: 0x4C9807980CE70009 Mov
    // 0x0001D8: 0xEFD87F800887FF12 Ald
    temp_42 = in_attr0.z;
    // 0x0001E8: 0x4C98079C23070019 Mov
    // 0x0001F0: 0x4C6810180CC70404 Fmul
    temp_43 = vp_c6.data[51].x * vp_c6.data[51].x;
    // 0x0001F8: 0x49A002180CD70504 Ffma
    temp_44 = fma(vp_c6.data[51].y, vp_c6.data[51].y, temp_43);
    // 0x000208: 0x49A002180CE70909 Ffma
    temp_45 = fma(vp_c6.data[51].z, vp_c6.data[51].z, temp_44);
    // 0x000210: 0x5080000000570909 Mufu
    temp_46 = inversesqrt(temp_45);
    // 0x000218: 0x4C68101000471104 Fmul
    temp_47 = temp_40 * vp_c4.data[1].x;
    // 0x000228: 0x4C68101000071105 Fmul
    temp_48 = temp_40 * vp_c4.data[0].x;
    // 0x000230: 0x5C58300000F7110F Fadd
    temp_49 = 0.0 - temp_0;
    temp_50 = temp_40 + temp_49;
    // 0x000238: 0x5C58300000E7130E Fadd
    temp_51 = 0.0 - temp_1;
    temp_52 = temp_41 + temp_51;
    // 0x000248: 0x49A0021000571304 Ffma
    temp_53 = fma(temp_41, vp_c4.data[1].y, temp_47);
    // 0x000250: 0x49A0029000171314 Ffma
    temp_54 = fma(temp_41, vp_c4.data[0].y, temp_48);
    // 0x000258: 0x5C68100000F70F0F Fmul
    temp_55 = temp_50 * temp_50;
    // 0x000268: 0x49A0021000671205 Ffma
    temp_56 = fma(temp_42, vp_c4.data[1].z, temp_53);
    // 0x000270: 0x4C6810180CC7090B Fmul
    temp_57 = temp_46 * vp_c6.data[51].x;
    // 0x000278: 0x4C68101000871104 Fmul
    temp_58 = temp_40 * vp_c4.data[2].x;
    // 0x000288: 0x49A00A1000271206 Ffma
    temp_59 = fma(temp_42, vp_c4.data[0].z, temp_54);
    // 0x000290: 0x4C6810180CE7090A Fmul
    temp_60 = temp_46 * vp_c6.data[51].z;
    // 0x000298: 0x4C58101000770505 Fadd
    temp_61 = temp_56 + vp_c4.data[1].w;
    // 0x0002A8: 0x49A105980CF70B14 Ffma
    temp_62 = 0.0 - vp_c6.data[51].w;
    temp_63 = fma(temp_57, temp_62, temp_57);
    // 0x0002B0: 0x49A0021000971304 Ffma
    temp_64 = fma(temp_41, vp_c4.data[2].y, temp_58);
    // 0x0002B8: 0x4C58101000370606 Fadd
    temp_65 = temp_59 + vp_c4.data[0].w;
    // 0x0002C8: 0x4C68101409670515 Fmul
    temp_66 = temp_61 * vp_c5.data[37].z;
    // 0x0002D0: 0x1E23DCCCCCD71417 Fmul32i
    temp_67 = temp_63 * 0.100000001;
    // 0x0002D8: 0x49A0021000A71204 Ffma
    temp_68 = fma(temp_42, vp_c4.data[2].z, temp_64);
    // 0x0002E8: 0x49A105180CF70A14 Ffma
    temp_69 = 0.0 - vp_c6.data[51].w;
    temp_70 = fma(temp_60, temp_69, temp_60);
    // 0x0002F0: 0x5C58300000C71212 Fadd
    temp_71 = 0.0 - temp_2;
    temp_72 = temp_42 + temp_71;
    // 0x0002F8: 0x59A0078000E70E0C Ffma
    temp_73 = fma(temp_52, temp_52, temp_55);
    // 0x000308: 0x5C5830000077050F Fadd
    temp_74 = 0.0 - temp_13;
    temp_75 = temp_61 + temp_74;
    // 0x000310: 0x59A10A8001770617 Ffma
    temp_76 = 0.0 - temp_67;
    temp_77 = fma(temp_65, temp_76, temp_66);
    // 0x000318: 0x4C58101000B70404 Fadd
    temp_78 = temp_68 + vp_c4.data[2].w;
    // 0x000328: 0x1E23DCCCCCD71415 Fmul32i
    temp_79 = temp_70 * 0.100000001;
    // 0x000330: 0x4C6810180CD7090E Fmul
    temp_80 = temp_46 * vp_c6.data[51].y;
    // 0x000338: 0xEFD87F8014C7FF09 Ald
    temp_81 = in_attr12.w;
    // 0x000348: 0x5C58300000870614 Fadd
    temp_82 = 0.0 - temp_11;
    temp_83 = temp_65 + temp_82;
    // 0x000350: 0x59A006000127120C Ffma
    temp_84 = fma(temp_72, temp_72, temp_73);
    // 0x000358: 0x32A0033F00070512 Ffma
    temp_85 = fma(temp_61, 0.5, temp_65);
    // 0x000368: 0x5080000000870C0C Mufu
    temp_86 = sqrt(temp_84);
    // 0x000370: 0x59A00B8001570415 Ffma
    temp_87 = fma(temp_78, temp_79, temp_77);
    // 0x000378: 0x5C58300000D70411 Fadd
    temp_88 = 0.0 - temp_15;
    temp_89 = temp_78 + temp_88;
    // 0x000388: 0x49A0091407571912 Ffma
    temp_90 = fma(vp_c7.data[140].x, vp_c5.data[29].y, temp_85);
    // 0x000390: 0x49A00A9C23071015 Ffma
    temp_91 = fma(0.5, vp_c7.data[140].x, temp_87);
    // 0x000398: 0x59A207800117FF16 Ffma
    temp_92 = 0.0 - temp_75;
    temp_93 = fma(0.0, temp_89, temp_92);
    // 0x0003A8: 0x59A10A000117FF11 Ffma
    temp_94 = 0.0 - temp_89;
    temp_95 = fma(0.0, temp_94, temp_83);
    // 0x0003B0: 0x5C90000001570013 Rro
    // 0x0003B8: 0x3868104040071510 Fmul
    temp_96 = temp_91 * 3.0;
    // 0x0003C8: 0x5080000000071313 Mufu
    temp_97 = cos(temp_91);
    // 0x0003D0: 0x38681040A0071517 Fmul
    temp_98 = temp_91 * 5.0;
    // 0x0003D8: 0x4C68101409771518 Fmul
    temp_99 = temp_91 * vp_c5.data[37].w;
    // 0x0003E8: 0x5C6910000147FF15 Fmul
    temp_100 = 0.0 - temp_83;
    temp_101 = 0.0 * temp_100;
    // 0x0003F0: 0x5C90000001070010 Rro
    // 0x0003F8: 0x5080000000071010 Mufu
    temp_102 = cos(temp_96);
    // 0x000408: 0x5C90000001770014 Rro
    // 0x000410: 0x5C68100000B71617 Fmul
    temp_103 = temp_93 * temp_57;
    // 0x000418: 0x5080000000071414 Mufu
    temp_104 = cos(temp_98);
    // 0x000428: 0x5C90000001870018 Rro
    // 0x000430: 0x5C68100001371316 Fmul
    temp_105 = temp_97 * temp_97;
    // 0x000438: 0x5080000000171813 Mufu
    temp_106 = sin(temp_99);
    // 0x000448: 0x59A00A8000F7FF15 Ffma
    temp_107 = fma(0.0, temp_75, temp_101);
    // 0x000450: 0x59A00B8000E71117 Ffma
    temp_108 = fma(temp_95, temp_80, temp_103);
    // 0x000458: 0x5C68100001071611 Fmul
    temp_109 = temp_105 * temp_102;
    // 0x000468: 0x59A00B8000A7150F Ffma
    temp_110 = fma(temp_107, temp_60, temp_108);
    // 0x000470: 0x5C90000001270017 Rro
    // 0x000478: 0x5C68100000C70E15 Fmul
    temp_111 = temp_80 * temp_86;
    // 0x000488: 0x508000000007170E Mufu
    temp_112 = cos(temp_90);
    // 0x000490: 0x5C68120001471111 Fmul
    temp_113 = temp_109 * 0.5;
    temp_114 = temp_113 * temp_104;
    // 0x000498: 0x1E23DCCCCCD71310 Fmul32i
    temp_115 = temp_106 * 0.100000001;
    // 0x0004A8: 0x4C68101409570913 Fmul
    temp_116 = temp_81 * vp_c5.data[37].y;
    // 0x0004B0: 0x5C59100000D70D12 Fadd
    temp_117 = 0.0 - temp_15;
    temp_118 = temp_117 + temp_15;
    // 0x0004B8: 0x5C68100000C70A0A Fmul
    temp_119 = temp_60 * temp_86;
    // 0x0004C8: 0x59A0080001170F0F Ffma
    temp_120 = fma(temp_110, temp_114, temp_115);
    // 0x0004D0: 0x4C6810180CF71310 Fmul
    temp_121 = temp_116 * vp_c6.data[51].w;
    // 0x0004D8: 0x5C68100000C70B13 Fmul
    temp_122 = temp_57 * temp_86;
    // 0x0004E8: 0x5C58100001270412 Fadd
    temp_123 = temp_78 + temp_118;
    // 0x0004F0: 0x4C68101407670E0E Fmul
    temp_124 = temp_112 * vp_c5.data[29].z;
    // 0x0004F8: 0x5C68100001571014 Fmul
    temp_125 = temp_121 * temp_111;
    // 0x000508: 0x5C68100001371013 Fmul
    temp_126 = temp_121 * temp_122;
    // 0x000510: 0x5C68100000A71016 Fmul
    temp_127 = temp_121 * temp_119;
    // 0x000518: 0x5C6810000137110A Fmul
    temp_128 = temp_114 * temp_126;
    // 0x000528: 0x5C68100001671116 Fmul
    temp_129 = temp_114 * temp_127;
    // 0x000530: 0x1E23CF5C28F70A0A Fmul32i
    temp_130 = temp_128 * 0.0299999993;
    // 0x000538: 0x5C6810000007000B Fmul
    temp_131 = temp_36 * temp_36;
    // 0x000548: 0x5C58100000270002 Fadd
    temp_132 = temp_36 + temp_38;
    // 0x000550: 0x5C58100000370103 Fadd
    temp_133 = temp_37 + temp_39;
    // 0x000558: 0x59A005800017010D Ffma
    temp_134 = fma(temp_37, temp_37, temp_131);
    // 0x000568: 0x5C6810000147110B Fmul
    temp_135 = temp_114 * temp_125;
    // 0x000570: 0x5084000000870D0D Mufu
    temp_136 = sqrt(temp_134);
    temp_137 = clamp(temp_136, 0.0, 1.0);
    // 0x000578: 0x59A009000057FF11 Ffma
    temp_138 = fma(0.0, temp_61, temp_123);
    // 0x000588: 0x5C68100000970313 Fmul
    temp_139 = temp_133 * temp_81;
    // 0x000590: 0x59A108800067FF11 Ffma
    temp_140 = 0.0 - temp_65;
    temp_141 = fma(0.0, temp_140, temp_138);
    // 0x000598: 0x5C68100000C71313 Fmul
    temp_142 = temp_139 * temp_86;
    // 0x0005A8: 0x5C68100000D70E00 Fmul
    temp_143 = temp_124 * temp_137;
    // 0x0005B0: 0x4CB0119002371A0D F2i
    temp_144 = trunc(vp_c4.data[8].w);
    temp_145 = int(temp_144);
    // 0x0005B8: 0x49A000140747020E Ffma
    temp_146 = fma(temp_132, vp_c5.data[29].x, temp_143);
    // 0x0005C8: 0x49A0088400071600 Ffma
    temp_147 = fma(temp_129, vp_c1.data[0].x, temp_141);
    // 0x0005D0: 0x5C68100000970211 Fmul
    temp_148 = temp_132 * temp_81;
    // 0x0005D8: 0x5C68100000970E0E Fmul
    temp_149 = temp_146 * temp_81;
    // 0x0005E8: 0x3848000000470D14 Shl
    temp_150 = temp_145 << 4;
    // 0x0005F0: 0x5C68100000C71111 Fmul
    temp_151 = temp_148 * temp_86;
    // 0x0005F8: 0xEF94007048871415 Ldc
    temp_152 = temp_150 + 0x488;
    temp_153 = uint(temp_152) >> 2;
    temp_154 = temp_153 >> 2;
    temp_155 = int(temp_153) & 3;
    temp_156 = vp_c7.data[int(temp_154)][temp_155];
    // 0x000608: 0x59A0070001070F0E Ffma
    temp_157 = fma(temp_120, temp_121, temp_149);
    // 0x000610: 0xEF94007068871416 Ldc
    temp_158 = temp_150 + 0x688;
    temp_159 = uint(temp_158) >> 2;
    temp_160 = temp_159 >> 2;
    temp_161 = int(temp_159) & 3;
    temp_162 = vp_c7.data[int(temp_160)][temp_161];
    // 0x000618: 0x1E23CF5C28F70B0C Fmul32i
    temp_163 = temp_135 * 0.0299999993;
    // 0x000628: 0xEF95007068071402 Ldc
    temp_164 = temp_150 + 0x680;
    temp_165 = uint(temp_164) >> 2;
    temp_166 = temp_165 >> 2;
    temp_167 = int(temp_165) & 3;
    temp_168 = vp_c7.data[int(temp_166)][temp_167];
    temp_169 = int(temp_165) + 1;
    temp_170 = uint(temp_169) >> 2;
    temp_171 = temp_169 & 3;
    temp_172 = vp_c7.data[int(temp_170)][temp_171];
    // 0x000630: 0x4C9807940027000B Mov
    // 0x000638: 0x49A005140777110A Ffma
    temp_173 = fma(temp_151, vp_c5.data[29].w, temp_130);
    // 0x000648: 0x5C90000000E70010 Rro
    // 0x000650: 0x49A0061407771313 Ffma
    temp_174 = fma(temp_142, vp_c5.data[29].w, temp_163);
    // 0x000658: 0x508000000017100D Mufu
    temp_175 = sin(temp_157);
    // 0x000668: 0x508000000007100E Mufu
    temp_176 = cos(temp_157);
    // 0x000670: 0x5C69100000D7070F Fmul
    temp_177 = 0.0 - temp_175;
    temp_178 = temp_13 * temp_177;
    // 0x000678: 0x5C68100000E70712 Fmul
    temp_179 = temp_13 * temp_176;
    // 0x000688: 0x59A3078000E7080F Ffma
    temp_180 = 0.0 - temp_176;
    temp_181 = 0.0 - temp_178;
    temp_182 = fma(temp_11, temp_180, temp_181);
    // 0x000690: 0x59A3090000D70812 Ffma
    temp_183 = 0.0 - temp_175;
    temp_184 = 0.0 - temp_179;
    temp_185 = fma(temp_11, temp_183, temp_184);
    // 0x000698: 0x5C58100000F7080F Fadd
    temp_186 = temp_11 + temp_182;
    // 0x0006A8: 0xEFD87F801047FF08 Ald
    temp_187 = in_attr8.y;
    // 0x0006B0: 0x5C58100001270712 Fadd
    temp_188 = temp_13 + temp_185;
    // 0x0006B8: 0x59A00B0001570007 Ffma
    temp_189 = fma(temp_147, temp_156, temp_162);
    // 0x0006C8: 0xEF95007048071400 Ldc
    temp_190 = temp_150 + 0x480;
    temp_191 = uint(temp_190) >> 2;
    temp_192 = temp_191 >> 2;
    temp_193 = int(temp_191) & 3;
    temp_194 = vp_c7.data[int(temp_192)][temp_193];
    temp_195 = int(temp_191) + 1;
    temp_196 = uint(temp_195) >> 2;
    temp_197 = temp_195 & 3;
    temp_198 = vp_c7.data[int(temp_196)][temp_197];
    // 0x0006D0: 0x59A007800047FF10 Ffma
    temp_199 = fma(0.0, temp_78, temp_186);
    // 0x0006D8: 0xEFD87F801007FF0F Ald
    temp_200 = in_attr8.x;
    // 0x0006E8: 0x59A009000047FF04 Ffma
    temp_201 = fma(0.0, temp_78, temp_188);
    // 0x0006F0: 0xEFF07F8008C7FF09 Ast
    out_attr0.w = temp_81;
    // 0x0006F8: 0x59A1080000D70510 Ffma
    temp_202 = 0.0 - temp_175;
    temp_203 = fma(temp_61, temp_202, temp_199);
    // 0x000708: 0x59A0020000E70504 Ffma
    temp_204 = fma(temp_61, temp_176, temp_201);
    // 0x000710: 0x59A0080000E70610 Ffma
    temp_205 = fma(temp_65, temp_176, temp_203);
    // 0x000718: 0x4C9807940037000E Mov
    // 0x000728: 0x59A0020000D70604 Ffma
    temp_206 = fma(temp_65, temp_175, temp_204);
    // 0x000730: 0x5C58100000A71005 Fadd
    temp_207 = temp_205 + temp_173;
    // 0x000738: 0x51A0059400470806 Ffma
    temp_208 = fma(temp_187, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000748: 0x51A0071400570808 Ffma
    temp_209 = fma(temp_187, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000750: 0x4C5810180BA7070A Fadd
    temp_210 = temp_189 + vp_c6.data[46].z;
    // 0x000758: 0x5C58100001370404 Fadd
    temp_211 = temp_206 + temp_174;
    // 0x000768: 0x59A0010000070502 Ffma
    temp_212 = fma(temp_207, temp_194, temp_168);
    // 0x000770: 0x49A0031400070F00 Ffma
    temp_213 = fma(temp_200, vp_c5.data[0].x, temp_208);
    // 0x000778: 0x49A0041400170F0F Ffma
    temp_214 = fma(temp_200, vp_c5.data[0].y, temp_209);
    // 0x000788: 0xEFF07F800A07FF00 Ast
    out_attr2.x = temp_213;
    // 0x000790: 0x59A0018000170401 Ffma
    temp_215 = fma(temp_211, temp_198, temp_172);
    // 0x000798: 0xEFF07F800A47FF0F Ast
    out_attr2.y = temp_214;
    // 0x0007A8: 0x4C68100C00070208 Fmul
    temp_216 = temp_212 * vp_c3.data[0].x;
    // 0x0007B0: 0x4C68100C00870203 Fmul
    temp_217 = temp_212 * vp_c3.data[2].x;
    // 0x0007B8: 0x4C68100C00470206 Fmul
    temp_218 = temp_212 * vp_c3.data[1].x;
    // 0x0007C8: 0x4C6810180C670A0C Fmul
    temp_219 = temp_210 * vp_c6.data[49].z;
    // 0x0007D0: 0x4C6810180C270A0B Fmul
    temp_220 = temp_210 * vp_c6.data[48].z;
    // 0x0007D8: 0x4C6810180CA70A0A Fmul
    temp_221 = temp_210 * vp_c6.data[50].z;
    // 0x0007E8: 0x49A0040C00170108 Ffma
    temp_222 = fma(temp_215, vp_c3.data[0].y, temp_216);
    // 0x0007F0: 0x4C5810180B970105 Fadd
    temp_223 = temp_215 + vp_c6.data[46].y;
    // 0x0007F8: 0x49A0018C00970104 Ffma
    temp_224 = fma(temp_215, vp_c3.data[2].y, temp_217);
    // 0x000808: 0x49A0030C00570106 Ffma
    temp_225 = fma(temp_215, vp_c3.data[1].y, temp_218);
    // 0x000810: 0x4C5830180B17010E Fadd
    temp_226 = 0.0 - vp_c6.data[44].y;
    temp_227 = temp_215 + temp_226;
    // 0x000818: 0x4C58101002070701 Fadd
    temp_228 = temp_189 + vp_c4.data[8].x;
    // 0x000828: 0x4C5830180B07020D Fadd
    temp_229 = 0.0 - vp_c6.data[44].x;
    temp_230 = temp_212 + temp_229;
    // 0x000830: 0x49A0040C00270703 Ffma
    temp_231 = fma(temp_189, vp_c3.data[0].z, temp_222);
    // 0x000838: 0x49A006180C57050C Ffma
    temp_232 = fma(temp_223, vp_c6.data[49].y, temp_219);
    // 0x000848: 0x49A005980C17050B Ffma
    temp_233 = fma(temp_223, vp_c6.data[48].y, temp_220);
    // 0x000850: 0x49A005180C97050A Ffma
    temp_234 = fma(temp_223, vp_c6.data[50].y, temp_221);
    // 0x000858: 0x4C5810180B870205 Fadd
    temp_235 = temp_212 + vp_c6.data[46].x;
    // 0x000868: 0x49A0030C00670102 Ffma
    temp_236 = fma(temp_228, vp_c3.data[1].z, temp_225);
    // 0x000870: 0x4C68101803870D0D Fmul
    temp_237 = temp_230 * vp_c6.data[14].x;
    // 0x000878: 0x49A0030C00670706 Ffma
    temp_238 = fma(temp_189, vp_c3.data[1].z, temp_225);
    // 0x000888: 0x4C58100C00370303 Fadd
    temp_239 = temp_231 + vp_c3.data[0].w;
    // 0x000890: 0x49A0040C00270108 Ffma
    temp_240 = fma(temp_228, vp_c3.data[0].z, temp_222);
    // 0x000898: 0x49A0020C00A70101 Ffma
    temp_241 = fma(temp_228, vp_c3.data[2].z, temp_224);
    // 0x0008A8: 0x49A0020C00A70704 Ffma
    temp_242 = fma(temp_189, vp_c3.data[2].z, temp_224);
    // 0x0008B0: 0x49A0069803970E0D Ffma
    temp_243 = fma(temp_227, vp_c6.data[14].y, temp_237);
    // 0x0008B8: 0x4C5830180B270707 Fadd
    temp_244 = 0.0 - vp_c6.data[44].z;
    temp_245 = temp_189 + temp_244;
    // 0x0008C8: 0x4C58100C00770606 Fadd
    temp_246 = temp_238 + vp_c3.data[1].w;
    // 0x0008D0: 0x4C68101802C70303 Fmul
    temp_247 = temp_239 * vp_c6.data[11].x;
    // 0x0008D8: 0x4C58100C00370808 Fadd
    temp_248 = temp_240 + vp_c3.data[0].w;
    // 0x0008E8: 0x49A006180C47050C Ffma
    temp_249 = fma(temp_235, vp_c6.data[49].x, temp_232);
    // 0x0008F0: 0x49A005180C87050A Ffma
    temp_250 = fma(temp_235, vp_c6.data[50].x, temp_234);
    // 0x0008F8: 0x49A005980C07050B Ffma
    temp_251 = fma(temp_235, vp_c6.data[48].x, temp_233);
    // 0x000908: 0x49A0069803A7070D Ffma
    temp_252 = fma(temp_245, vp_c6.data[14].z, temp_243);
    // 0x000910: 0x49A0019802D70603 Ffma
    temp_253 = fma(temp_246, vp_c6.data[11].y, temp_247);
    // 0x000918: 0x4C68100C02470800 Fmul
    temp_254 = temp_248 * vp_c3.data[9].x;
    // 0x000928: 0x4C98079803C70006 Mov
    // 0x000930: 0x4C68100C01C70805 Fmul
    temp_255 = temp_248 * vp_c3.data[7].x;
    // 0x000938: 0x4C68100C02870807 Fmul
    temp_256 = temp_248 * vp_c3.data[10].x;
    // 0x000948: 0x4C58100C00770202 Fadd
    temp_257 = temp_236 + vp_c3.data[1].w;
    // 0x000950: 0x4C68100C02070808 Fmul
    temp_258 = temp_248 * vp_c3.data[8].x;
    // 0x000958: 0x4C58100C00B70404 Fadd
    temp_259 = temp_242 + vp_c3.data[2].w;
    // 0x000968: 0x51A0031803B70D0D Ffma
    temp_260 = fma(temp_252, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000970: 0xEFF07F800987FF04 Ast
    out_attr1.z = temp_259;
    // 0x000978: 0x4C58100C00B70101 Fadd
    temp_261 = temp_241 + vp_c3.data[2].w;
    // 0x000988: 0xEFF07F800B47FF0D Ast
    out_attr3.y = temp_260;
    // 0x000990: 0x49A0000C02570200 Ffma
    temp_262 = fma(temp_257, vp_c3.data[9].y, temp_254);
    // 0x000998: 0x49A0028C01D70206 Ffma
    temp_263 = fma(temp_257, vp_c3.data[7].y, temp_255);
    // 0x0009A8: 0x49A0038C02970207 Ffma
    temp_264 = fma(temp_257, vp_c3.data[10].y, temp_256);
    // 0x0009B0: 0x49A0040C02170208 Ffma
    temp_265 = fma(temp_257, vp_c3.data[8].y, temp_258);
    // 0x0009B8: 0x4C9807980307000E Mov
    // 0x0009C8: 0x49A0019802E70403 Ffma
    temp_266 = fma(temp_259, vp_c6.data[11].z, temp_253);
    // 0x0009D0: 0x49A0000C02670100 Ffma
    temp_267 = fma(temp_261, vp_c3.data[9].z, temp_262);
    // 0x0009D8: 0x49A0030C01E70106 Ffma
    temp_268 = fma(temp_261, vp_c3.data[7].z, temp_263);
    // 0x0009E8: 0x49A0038C02A70107 Ffma
    temp_269 = fma(temp_261, vp_c3.data[10].z, temp_264);
    // 0x0009F0: 0x49A0040C02270108 Ffma
    temp_270 = fma(temp_261, vp_c3.data[8].z, temp_265);
    // 0x0009F8: 0x4C6810180BB70C0C Fmul
    temp_271 = temp_249 * vp_c6.data[46].w;
    // 0x000A08: 0x4C6810180BB70B0B Fmul
    temp_272 = temp_251 * vp_c6.data[46].w;
    // 0x000A10: 0xEFF07F800C47FF0C Ast
    out_attr4.y = temp_271;
    // 0x000A18: 0x4C6810180BB70A0A Fmul
    temp_273 = temp_250 * vp_c6.data[46].w;
    // 0x000A28: 0xEFF07F800C07FF0B Ast
    out_attr4.x = temp_272;
    // 0x000A30: 0x51A0071802F70303 Ffma
    temp_274 = fma(temp_266, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000A38: 0xEFF07F800C87FF0A Ast
    out_attr4.z = temp_273;
    // 0x000A48: 0x4C58100C02770000 Fadd
    temp_275 = temp_267 + vp_c3.data[9].w;
    // 0x000A50: 0xEFF07F800B07FF03 Ast
    out_attr3.x = temp_274;
    // 0x000A58: 0x4C58100C01F70606 Fadd
    temp_276 = temp_268 + vp_c3.data[7].w;
    // 0x000A68: 0xEFF07F800787FF00 Ast
    gl_Position.z = temp_275;
    // 0x000A70: 0x4C58100C02B70707 Fadd
    temp_277 = temp_269 + vp_c3.data[10].w;
    // 0x000A78: 0xEFF07F800707FF06 Ast
    gl_Position.x = temp_276;
    // 0x000A88: 0x4C58100C02370808 Fadd
    temp_278 = temp_270 + vp_c3.data[8].w;
    // 0x000A90: 0xEFF07F8007C7FF07 Ast
    gl_Position.w = temp_277;
    // 0x000A98: 0xEFF07F800747FF08 Ast
    gl_Position.y = temp_278;
    // 0x000AA8: 0xE30000000007000F Exit
    return;
}
