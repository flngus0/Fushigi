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
    precise vec4 temp_20;
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
    int temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    int temp_144;
    precise float temp_145;
    int temp_146;
    uint temp_147;
    uint temp_148;
    int temp_149;
    precise float temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    int temp_155;
    uint temp_156;
    uint temp_157;
    int temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    int temp_173;
    uint temp_174;
    uint temp_175;
    int temp_176;
    precise float temp_177;
    int temp_178;
    uint temp_179;
    int temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    int temp_184;
    uint temp_185;
    uint temp_186;
    int temp_187;
    precise float temp_188;
    int temp_189;
    uint temp_190;
    int temp_191;
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
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079000370004 Mov
    // 0x000010: 0x4C98079000770006 Mov
    // 0x000018: 0x4C98078C00C70001 Mov
    // 0x000028: 0x4C98079000B70007 Mov
    // 0x000030: 0x4C98078C00D70003 Mov
    // 0x000038: 0x0103F0000007F00D Mov32i
    // 0x000048: 0x4C68100C01870400 Fmul
    temp_0 = vp_c4.data[0].w * vp_c3.data[6].x;
    // 0x000050: 0x4C9807980D370005 Mov
    // 0x000058: 0x49A0000C01970602 Ffma
    temp_1 = fma(vp_c4.data[1].w, vp_c3.data[6].y, temp_0);
    // 0x000068: 0x4C68101000370100 Fmul
    temp_2 = vp_c3.data[3].x * vp_c4.data[0].w;
    // 0x000070: 0x4C68100C01070401 Fmul
    temp_3 = vp_c4.data[0].w * vp_c3.data[4].x;
    // 0x000078: 0x49A0010C01A70702 Ffma
    temp_4 = fma(vp_c4.data[2].w, vp_c3.data[6].z, temp_1);
    // 0x000088: 0x49A0001000770300 Ffma
    temp_5 = fma(vp_c3.data[3].y, vp_c4.data[1].w, temp_2);
    // 0x000090: 0x4C98078C00E70003 Mov
    // 0x000098: 0x49A0008C01170601 Ffma
    temp_6 = fma(vp_c4.data[1].w, vp_c3.data[4].y, temp_3);
    // 0x0000A8: 0x4C58100C01B70202 Fadd
    temp_7 = temp_4 + vp_c3.data[6].w;
    // 0x0000B0: 0x5080000000470202 Mufu
    temp_8 = 1.0 / temp_7;
    // 0x0000B8: 0x49A0001000B70300 Ffma
    temp_9 = fma(vp_c3.data[3].z, vp_c4.data[2].w, temp_5);
    // 0x0000C8: 0x49A0008C01270701 Ffma
    temp_10 = fma(vp_c4.data[2].w, vp_c3.data[4].z, temp_6);
    // 0x0000D0: 0x4C58100C00F70000 Fadd
    temp_11 = temp_9 + vp_c3.data[3].w;
    // 0x0000D8: 0x4C58100C01370101 Fadd
    temp_12 = temp_10 + vp_c3.data[4].w;
    // 0x0000E8: 0x5C68100000270003 Fmul
    temp_13 = temp_11 * temp_8;
    // 0x0000F0: 0x5C69100000270100 Fmul
    temp_14 = 0.0 - temp_8;
    temp_15 = temp_12 * temp_14;
    // 0x0000F8: 0x4C9807980D270001 Mov
    // 0x000108: 0x32A006BF00070303 Ffma
    temp_16 = fma(temp_13, 0.5, 0.5);
    // 0x000110: 0x32A006BF00070000 Ffma
    temp_17 = fma(temp_15, 0.5, 0.5);
    // 0x000118: 0x51A000980D070302 Ffma
    temp_18 = fma(temp_16, vp_c6.data[52].z, vp_c6.data[52].x);
    // 0x000128: 0x4C98079C02A70001 Mov
    // 0x000130: 0x51A002980D170003 Ffma
    temp_19 = fma(temp_17, vp_c6.data[52].w, vp_c6.data[52].y);
    // 0x000138: 0xDEB80007A0170200 TexB
    temp_20 = texture(vp_t_cb7_2A, vec2(temp_18, temp_19)).xyzw;
    temp_21 = temp_20.x;
    temp_22 = temp_20.y;
    temp_23 = temp_20.z;
    temp_24 = temp_20.w;
    // 0x000148: 0x4C9807980CC70004 Mov
    // 0x000150: 0xEFD87F800807FF06 Ald
    temp_25 = in_attr0.x;
    // 0x000158: 0x4C9807980CD70005 Mov
    // 0x000168: 0xEFD87F800847FF07 Ald
    temp_26 = in_attr0.y;
    // 0x000170: 0x4C9807980CE70009 Mov
    // 0x000178: 0xEFD87F800887FF0C Ald
    temp_27 = in_attr0.z;
    // 0x000188: 0x4C6810180CC70404 Fmul
    temp_28 = vp_c6.data[51].x * vp_c6.data[51].x;
    // 0x000190: 0x4C98079400270019 Mov
    // 0x000198: 0x4C9807940037001A Mov
    // 0x0001A8: 0x49A002180CD70504 Ffma
    temp_29 = fma(vp_c6.data[51].y, vp_c6.data[51].y, temp_28);
    // 0x0001B0: 0x49A002180CE70909 Ffma
    temp_30 = fma(vp_c6.data[51].z, vp_c6.data[51].z, temp_29);
    // 0x0001B8: 0x5080000000570909 Mufu
    temp_31 = inversesqrt(temp_30);
    // 0x0001C8: 0x4C68101000470608 Fmul
    temp_32 = temp_25 * vp_c4.data[1].x;
    // 0x0001D0: 0x4C68101000070610 Fmul
    temp_33 = temp_25 * vp_c4.data[0].x;
    // 0x0001D8: 0x4C6810100087060E Fmul
    temp_34 = temp_25 * vp_c4.data[2].x;
    // 0x0001E8: 0x5C58300000670615 Fadd
    temp_35 = 0.0 - temp_25;
    temp_36 = temp_25 + temp_35;
    // 0x0001F0: 0x49A0041000570705 Ffma
    temp_37 = fma(temp_26, vp_c4.data[1].y, temp_32);
    // 0x0001F8: 0x49A008100017070B Ffma
    temp_38 = fma(temp_26, vp_c4.data[0].y, temp_33);
    // 0x000208: 0x49A007100097070F Ffma
    temp_39 = fma(temp_26, vp_c4.data[2].y, temp_34);
    // 0x000210: 0x49A007100097FF0E Ffma
    temp_40 = fma(0.0, vp_c4.data[2].y, temp_34);
    // 0x000218: 0x5C68100001571515 Fmul
    temp_41 = temp_36 * temp_36;
    // 0x000228: 0x4C6810180CC7090A Fmul
    temp_42 = temp_31 * vp_c6.data[51].x;
    // 0x000230: 0x49A0029000670C05 Ffma
    temp_43 = fma(temp_27, vp_c4.data[1].z, temp_37);
    // 0x000238: 0x49A0059000270C04 Ffma
    temp_44 = fma(temp_27, vp_c4.data[0].z, temp_38);
    // 0x000248: 0x49A0079000A70C0F Ffma
    temp_45 = fma(temp_27, vp_c4.data[2].z, temp_39);
    // 0x000250: 0x49A0071000A70C0E Ffma
    temp_46 = fma(temp_27, vp_c4.data[2].z, temp_40);
    // 0x000258: 0x49A105180CF70A0B Ffma
    temp_47 = 0.0 - vp_c6.data[51].w;
    temp_48 = fma(temp_42, temp_47, temp_42);
    // 0x000268: 0x4C58101000770505 Fadd
    temp_49 = temp_43 + vp_c4.data[1].w;
    // 0x000270: 0x4C58101000370404 Fadd
    temp_50 = temp_44 + vp_c4.data[0].w;
    // 0x000278: 0x4C58101000B70F06 Fadd
    temp_51 = temp_45 + vp_c4.data[2].w;
    // 0x000288: 0x5C5910000077FF0F Fadd
    temp_52 = -0.0 + temp_26;
    // 0x000290: 0x1E23DCCCCCD70B12 Fmul32i
    temp_53 = temp_48 * 0.100000001;
    // 0x000298: 0x4C6810180CE7090B Fmul
    temp_54 = temp_31 * vp_c6.data[51].z;
    // 0x0002A8: 0x4C68101409670511 Fmul
    temp_55 = temp_49 * vp_c5.data[37].z;
    // 0x0002B0: 0x49A105980CF70B13 Ffma
    temp_56 = 0.0 - vp_c6.data[51].w;
    temp_57 = fma(temp_54, temp_56, temp_54);
    // 0x0002B8: 0x59A1088001270414 Ffma
    temp_58 = 0.0 - temp_53;
    temp_59 = fma(temp_50, temp_58, temp_55);
    // 0x0002C8: 0x49A008100017FF12 Ffma
    temp_60 = fma(0.0, vp_c4.data[0].y, temp_33);
    // 0x0002D0: 0xEFD87F801047FF10 Ald
    temp_61 = in_attr8.y;
    // 0x0002D8: 0x49A004100057FF11 Ffma
    temp_62 = fma(0.0, vp_c4.data[1].y, temp_32);
    // 0x0002E8: 0x1E23DCCCCCD71313 Fmul32i
    temp_63 = temp_57 * 0.100000001;
    // 0x0002F0: 0x49A0091000270C07 Ffma
    temp_64 = fma(temp_27, vp_c4.data[0].z, temp_60);
    // 0x0002F8: 0x49A0089000670C08 Ffma
    temp_65 = fma(temp_27, vp_c4.data[1].z, temp_62);
    // 0x000308: 0x5C58300000C70C11 Fadd
    temp_66 = 0.0 - temp_27;
    temp_67 = temp_27 + temp_66;
    // 0x000310: 0x59A00A0001370613 Ffma
    temp_68 = fma(temp_51, temp_63, temp_59);
    // 0x000318: 0x59A00A8000F70F14 Ffma
    temp_69 = fma(temp_52, temp_52, temp_41);
    // 0x000328: 0x4C58101000370707 Fadd
    temp_70 = temp_64 + vp_c4.data[0].w;
    // 0x000330: 0x4C58101000B70E0F Fadd
    temp_71 = temp_46 + vp_c4.data[2].w;
    // 0x000338: 0x4C58101000770808 Fadd
    temp_72 = temp_65 + vp_c4.data[1].w;
    // 0x000348: 0x49A0099C23070D0D Ffma
    temp_73 = fma(0.5, vp_c7.data[140].x, temp_68);
    // 0x000350: 0x59A00A0001171111 Ffma
    temp_74 = fma(temp_67, temp_67, temp_69);
    // 0x000358: 0x5C58300000770417 Fadd
    temp_75 = 0.0 - temp_70;
    temp_76 = temp_50 + temp_75;
    // 0x000368: 0x5C58300000F7060C Fadd
    temp_77 = 0.0 - temp_71;
    temp_78 = temp_51 + temp_77;
    // 0x000370: 0x5C58300000870512 Fadd
    temp_79 = 0.0 - temp_72;
    temp_80 = temp_49 + temp_79;
    // 0x000378: 0x5C90000000D70015 Rro
    // 0x000388: 0x3868104040070D0E Fmul
    temp_81 = temp_73 * 3.0;
    // 0x000390: 0x5080000000071515 Mufu
    temp_82 = cos(temp_73);
    // 0x000398: 0x5C6910000177FF13 Fmul
    temp_83 = 0.0 - temp_76;
    temp_84 = 0.0 * temp_83;
    // 0x0003A8: 0x38681040A0070D16 Fmul
    temp_85 = temp_73 * 5.0;
    // 0x0003B0: 0x59A2090000C7FF18 Ffma
    temp_86 = 0.0 - temp_80;
    temp_87 = fma(0.0, temp_78, temp_86);
    // 0x0003B8: 0x59A10B8000C7FF17 Ffma
    temp_88 = 0.0 - temp_78;
    temp_89 = fma(0.0, temp_88, temp_76);
    // 0x0003C8: 0xEFD87F801007FF0C Ald
    temp_90 = in_attr8.x;
    // 0x0003D0: 0x5C90000000E70014 Rro
    // 0x0003D8: 0x59A009800127FF12 Ffma
    temp_91 = fma(0.0, temp_80, temp_84);
    // 0x0003E8: 0x5080000000071414 Mufu
    temp_92 = cos(temp_81);
    // 0x0003F0: 0x5C90000001670013 Rro
    // 0x0003F8: 0x4C6810180CD7090E Fmul
    temp_93 = temp_31 * vp_c6.data[51].y;
    // 0x000408: 0x5080000000871109 Mufu
    temp_94 = sqrt(temp_74);
    // 0x000410: 0x5C68100000A71818 Fmul
    temp_95 = temp_87 * temp_42;
    // 0x000418: 0x5080000000071313 Mufu
    temp_96 = cos(temp_85);
    // 0x000428: 0x5C68100001571516 Fmul
    temp_97 = temp_82 * temp_82;
    // 0x000430: 0x51A00C9400471015 Ffma
    temp_98 = fma(temp_61, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000438: 0x5C59100000F70F19 Fadd
    temp_99 = 0.0 - temp_71;
    temp_100 = temp_99 + temp_71;
    // 0x000448: 0x59A00C0000E71718 Ffma
    temp_101 = fma(temp_89, temp_93, temp_95);
    // 0x000450: 0x4C68101409770D17 Fmul
    temp_102 = temp_73 * vp_c5.data[37].w;
    // 0x000458: 0x51A00D140057100D Ffma
    temp_103 = fma(temp_61, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000468: 0x5C68100001471614 Fmul
    temp_104 = temp_97 * temp_92;
    // 0x000470: 0x4C98079409570016 Mov
    // 0x000478: 0x59A00C0000B71212 Ffma
    temp_105 = fma(temp_91, temp_54, temp_101);
    // 0x000488: 0x5C90000001770010 Rro
    // 0x000490: 0x5C68100000970B18 Fmul
    temp_106 = temp_54 * temp_94;
    // 0x000498: 0x5080000000171010 Mufu
    temp_107 = sin(temp_102);
    // 0x0004A8: 0x5C68120001371413 Fmul
    temp_108 = temp_104 * 0.5;
    temp_109 = temp_108 * temp_96;
    // 0x0004B0: 0x4C6810180CF7160F Fmul
    temp_110 = vp_c5.data[37].y * vp_c6.data[51].w;
    // 0x0004B8: 0x5C58100001970614 Fadd
    temp_111 = temp_51 + temp_100;
    // 0x0004C8: 0x5C68100000970A11 Fmul
    temp_112 = temp_42 * temp_94;
    // 0x0004D0: 0x5C68100000970E16 Fmul
    temp_113 = temp_93 * temp_94;
    // 0x0004D8: 0x4C98079C2307000B Mov
    // 0x0004E8: 0x32A0023F0007050E Ffma
    temp_114 = fma(temp_49, 0.5, temp_50);
    // 0x0004F0: 0x5C68100001870F18 Fmul
    temp_115 = temp_110 * temp_106;
    // 0x0004F8: 0x59A00A000057FF0A Ffma
    temp_116 = fma(0.0, temp_49, temp_111);
    // 0x000508: 0x5C68100001170F14 Fmul
    temp_117 = temp_110 * temp_112;
    // 0x000510: 0x49A0069400170C17 Ffma
    temp_118 = fma(temp_90, vp_c5.data[0].y, temp_103);
    // 0x000518: 0x49A00A9400070C15 Ffma
    temp_119 = fma(temp_90, vp_c5.data[0].x, temp_98);
    // 0x000528: 0x49A0071407570B0E Ffma
    temp_120 = fma(vp_c7.data[140].x, vp_c5.data[29].y, temp_114);
    // 0x000530: 0x5C68100001871318 Fmul
    temp_121 = temp_109 * temp_115;
    // 0x000538: 0x59A105000047FF11 Ffma
    temp_122 = 0.0 - temp_50;
    temp_123 = fma(0.0, temp_122, temp_116);
    // 0x000548: 0xEFD87F8014C7FF0A Ald
    temp_124 = in_attr12.w;
    // 0x000550: 0x1E23DCCCCCD71010 Fmul32i
    temp_125 = temp_107 * 0.100000001;
    // 0x000558: 0xEFF07F800A07FF15 Ast
    out_attr2.x = temp_119;
    // 0x000568: 0x5C68100001670F16 Fmul
    temp_126 = temp_110 * temp_113;
    // 0x000570: 0xEFF07F800A47FF17 Ast
    out_attr2.y = temp_118;
    // 0x000578: 0x49A008840007180D Ffma
    temp_127 = fma(temp_121, vp_c1.data[0].x, temp_123);
    // 0x000588: 0x5C90000000E70011 Rro
    // 0x000590: 0x59A0080001371212 Ffma
    temp_128 = fma(temp_105, temp_109, temp_125);
    // 0x000598: 0x5080000000071110 Mufu
    temp_129 = cos(temp_120);
    // 0x0005A8: 0x5C6810000147130B Fmul
    temp_130 = temp_109 * temp_117;
    // 0x0005B0: 0x5C6810000167130C Fmul
    temp_131 = temp_109 * temp_126;
    // 0x0005B8: 0x1E23CF5C28F70B0B Fmul32i
    temp_132 = temp_130 * 0.0299999993;
    // 0x0005C8: 0xEFF07F8008C7FF0A Ast
    out_attr0.w = temp_124;
    // 0x0005D0: 0x4C68101407671010 Fmul
    temp_133 = temp_129 * vp_c5.data[29].z;
    // 0x0005D8: 0x1E23CF5C28F70C0C Fmul32i
    temp_134 = temp_131 * 0.0299999993;
    // 0x0005E8: 0x4C98079803C7000A Mov
    // 0x0005F0: 0x5C6810000007000E Fmul
    temp_135 = temp_21 * temp_21;
    // 0x0005F8: 0x5C58100000270002 Fadd
    temp_136 = temp_21 + temp_23;
    // 0x000608: 0x4CB0119002371A00 F2i
    temp_137 = trunc(vp_c4.data[8].w);
    temp_138 = int(temp_137);
    // 0x000610: 0x5C58100000370103 Fadd
    temp_139 = temp_22 + temp_24;
    // 0x000618: 0x59A007000017010E Ffma
    temp_140 = fma(temp_22, temp_22, temp_135);
    // 0x000628: 0x5084000000870E0E Mufu
    temp_141 = sqrt(temp_140);
    temp_142 = clamp(temp_141, 0.0, 1.0);
    // 0x000630: 0x5C68100000970303 Fmul
    temp_143 = temp_139 * temp_94;
    // 0x000638: 0x3848000000470013 Shl
    temp_144 = temp_138 << 4;
    // 0x000648: 0x49A0061407770303 Ffma
    temp_145 = fma(temp_143, vp_c5.data[29].w, temp_134);
    // 0x000650: 0xEF94007068871314 Ldc
    temp_146 = temp_144 + 0x688;
    temp_147 = uint(temp_146) >> 2;
    temp_148 = temp_147 >> 2;
    temp_149 = int(temp_147) & 3;
    temp_150 = vp_c7.data[int(temp_148)][temp_149];
    // 0x000658: 0x5C68100000E71010 Fmul
    temp_151 = temp_133 * temp_142;
    // 0x000668: 0x49A0081407470210 Ffma
    temp_152 = fma(temp_136, vp_c5.data[29].x, temp_151);
    // 0x000670: 0x5C68100000970202 Fmul
    temp_153 = temp_136 * temp_94;
    // 0x000678: 0x59A0080000F71210 Ffma
    temp_154 = fma(temp_128, temp_110, temp_152);
    // 0x000688: 0xEF9400704887130F Ldc
    temp_155 = temp_144 + 0x488;
    temp_156 = uint(temp_155) >> 2;
    temp_157 = temp_156 >> 2;
    temp_158 = int(temp_156) & 3;
    temp_159 = vp_c7.data[int(temp_157)][temp_158];
    // 0x000690: 0x49A0059407770202 Ffma
    temp_160 = fma(temp_153, vp_c5.data[29].w, temp_132);
    // 0x000698: 0x5C90000001070015 Rro
    // 0x0006A8: 0x5080000000171512 Mufu
    temp_161 = sin(temp_154);
    // 0x0006B0: 0x5080000000071516 Mufu
    temp_162 = cos(temp_154);
    // 0x0006B8: 0x5C69100001270800 Fmul
    temp_163 = 0.0 - temp_161;
    temp_164 = temp_72 * temp_163;
    // 0x0006C8: 0x5C68100001670810 Fmul
    temp_165 = temp_72 * temp_162;
    // 0x0006D0: 0x59A00A0000F70D0D Ffma
    temp_166 = fma(temp_127, temp_159, temp_150);
    // 0x0006D8: 0x59A3000001670700 Ffma
    temp_167 = 0.0 - temp_162;
    temp_168 = 0.0 - temp_164;
    temp_169 = fma(temp_70, temp_167, temp_168);
    // 0x0006E8: 0x59A308000127070E Ffma
    temp_170 = 0.0 - temp_161;
    temp_171 = 0.0 - temp_165;
    temp_172 = fma(temp_70, temp_170, temp_171);
    // 0x0006F0: 0xEF95007068071310 Ldc
    temp_173 = temp_144 + 0x680;
    temp_174 = uint(temp_173) >> 2;
    temp_175 = temp_174 >> 2;
    temp_176 = int(temp_174) & 3;
    temp_177 = vp_c7.data[int(temp_175)][temp_176];
    temp_178 = int(temp_174) + 1;
    temp_179 = uint(temp_178) >> 2;
    temp_180 = temp_178 & 3;
    temp_181 = vp_c7.data[int(temp_179)][temp_180];
    // 0x0006F8: 0x5C58100000070700 Fadd
    temp_182 = temp_70 + temp_169;
    // 0x000708: 0x5C58100000E70808 Fadd
    temp_183 = temp_72 + temp_172;
    // 0x000710: 0xEF9500704807130E Ldc
    temp_184 = temp_144 + 0x480;
    temp_185 = uint(temp_184) >> 2;
    temp_186 = temp_185 >> 2;
    temp_187 = int(temp_185) & 3;
    temp_188 = vp_c7.data[int(temp_186)][temp_187];
    temp_189 = int(temp_185) + 1;
    temp_190 = uint(temp_189) >> 2;
    temp_191 = temp_189 & 3;
    temp_192 = vp_c7.data[int(temp_190)][temp_191];
    // 0x000718: 0x59A000000067FF00 Ffma
    temp_193 = fma(0.0, temp_51, temp_182);
    // 0x000728: 0x59A004000067FF08 Ffma
    temp_194 = fma(0.0, temp_51, temp_183);
    // 0x000730: 0x59A1000001270501 Ffma
    temp_195 = 0.0 - temp_161;
    temp_196 = fma(temp_49, temp_195, temp_193);
    // 0x000738: 0x59A0040001670505 Ffma
    temp_197 = fma(temp_49, temp_162, temp_194);
    // 0x000748: 0x59A0008001670401 Ffma
    temp_198 = fma(temp_50, temp_162, temp_196);
    // 0x000750: 0x59A0028001270405 Ffma
    temp_199 = fma(temp_50, temp_161, temp_197);
    // 0x000758: 0x4C5810180BA70D04 Fadd
    temp_200 = temp_166 + vp_c6.data[46].z;
    // 0x000768: 0x5C58100000270101 Fadd
    temp_201 = temp_198 + temp_160;
    // 0x000770: 0x5C58100000370500 Fadd
    temp_202 = temp_199 + temp_145;
    // 0x000778: 0x4C6810180C670409 Fmul
    temp_203 = temp_200 * vp_c6.data[49].z;
    // 0x000788: 0x4C6810180C270407 Fmul
    temp_204 = temp_200 * vp_c6.data[48].z;
    // 0x000790: 0x4C6810180CA7040B Fmul
    temp_205 = temp_200 * vp_c6.data[50].z;
    // 0x000798: 0x59A0080000E70101 Ffma
    temp_206 = fma(temp_201, temp_188, temp_177);
    // 0x0007A8: 0x59A0088000F70000 Ffma
    temp_207 = fma(temp_202, temp_192, temp_181);
    // 0x0007B0: 0x4C68100C00070105 Fmul
    temp_208 = temp_206 * vp_c3.data[0].x;
    // 0x0007B8: 0x4C5830180B070108 Fadd
    temp_209 = 0.0 - vp_c6.data[44].x;
    temp_210 = temp_206 + temp_209;
    // 0x0007C8: 0x4C68100C00870102 Fmul
    temp_211 = temp_206 * vp_c3.data[2].x;
    // 0x0007D0: 0x4C68100C00470103 Fmul
    temp_212 = temp_206 * vp_c3.data[1].x;
    // 0x0007D8: 0x4C5810180B970004 Fadd
    temp_213 = temp_207 + vp_c6.data[46].y;
    // 0x0007E8: 0x49A0028C00170006 Ffma
    temp_214 = fma(temp_207, vp_c3.data[0].y, temp_208);
    // 0x0007F0: 0x4C5830180B170005 Fadd
    temp_215 = 0.0 - vp_c6.data[44].y;
    temp_216 = temp_207 + temp_215;
    // 0x0007F8: 0x4C6810180387080C Fmul
    temp_217 = temp_210 * vp_c6.data[14].x;
    // 0x000808: 0x49A0010C00970002 Ffma
    temp_218 = fma(temp_207, vp_c3.data[2].y, temp_211);
    // 0x000810: 0x49A0018C00570003 Ffma
    temp_219 = fma(temp_207, vp_c3.data[1].y, temp_212);
    // 0x000818: 0x4C58101002070D00 Fadd
    temp_220 = temp_166 + vp_c4.data[8].x;
    // 0x000828: 0x49A004980C570408 Ffma
    temp_221 = fma(temp_213, vp_c6.data[49].y, temp_203);
    // 0x000830: 0x49A003980C170407 Ffma
    temp_222 = fma(temp_213, vp_c6.data[48].y, temp_204);
    // 0x000838: 0x49A005980C97040B Ffma
    temp_223 = fma(temp_213, vp_c6.data[50].y, temp_205);
    // 0x000848: 0x49A0030C00270D04 Ffma
    temp_224 = fma(temp_166, vp_c3.data[0].z, temp_214);
    // 0x000850: 0x49A006180397050C Ffma
    temp_225 = fma(temp_216, vp_c6.data[14].y, temp_217);
    // 0x000858: 0x4C5810180B870105 Fadd
    temp_226 = temp_206 + vp_c6.data[46].x;
    // 0x000868: 0x49A0018C00670001 Ffma
    temp_227 = fma(temp_220, vp_c3.data[1].z, temp_219);
    // 0x000870: 0x49A0018C00670D03 Ffma
    temp_228 = fma(temp_166, vp_c3.data[1].z, temp_219);
    // 0x000878: 0x49A0030C00270006 Ffma
    temp_229 = fma(temp_220, vp_c3.data[0].z, temp_214);
    // 0x000888: 0x4C58100C00370404 Fadd
    temp_230 = temp_224 + vp_c3.data[0].w;
    // 0x000890: 0x49A0010C00A70000 Ffma
    temp_231 = fma(temp_220, vp_c3.data[2].z, temp_218);
    // 0x000898: 0x49A0010C00A70D02 Ffma
    temp_232 = fma(temp_166, vp_c3.data[2].z, temp_218);
    // 0x0008A8: 0x49A004180C470508 Ffma
    temp_233 = fma(temp_226, vp_c6.data[49].x, temp_221);
    // 0x0008B0: 0x4C58100C00770303 Fadd
    temp_234 = temp_228 + vp_c3.data[1].w;
    // 0x0008B8: 0x4C58100C00370606 Fadd
    temp_235 = temp_229 + vp_c3.data[0].w;
    // 0x0008C8: 0x4C68101802C70404 Fmul
    temp_236 = temp_230 * vp_c6.data[11].x;
    // 0x0008D0: 0x49A005980C87050B Ffma
    temp_237 = fma(temp_226, vp_c6.data[50].x, temp_223);
    // 0x0008D8: 0x49A003980C070507 Ffma
    temp_238 = fma(temp_226, vp_c6.data[48].x, temp_222);
    // 0x0008E8: 0x4C58100C00B70202 Fadd
    temp_239 = temp_232 + vp_c3.data[2].w;
    // 0x0008F0: 0x4C58100C00770101 Fadd
    temp_240 = temp_227 + vp_c3.data[1].w;
    // 0x0008F8: 0xEFF07F800987FF02 Ast
    out_attr1.z = temp_239;
    // 0x000908: 0x49A0021802D70305 Ffma
    temp_241 = fma(temp_234, vp_c6.data[11].y, temp_236);
    // 0x000910: 0x4C68100C01C70604 Fmul
    temp_242 = temp_235 * vp_c3.data[7].x;
    // 0x000918: 0x4C6810180BB70808 Fmul
    temp_243 = temp_233 * vp_c6.data[46].w;
    // 0x000928: 0x4C6810180BB70709 Fmul
    temp_244 = temp_238 * vp_c6.data[46].w;
    // 0x000930: 0xEFF07F800C47FF08 Ast
    out_attr4.y = temp_243;
    // 0x000938: 0x49A0029802E70207 Ffma
    temp_245 = fma(temp_239, vp_c6.data[11].z, temp_241);
    // 0x000948: 0xEFF07F800C07FF09 Ast
    out_attr4.x = temp_244;
    // 0x000950: 0x4C68100C02470603 Fmul
    temp_246 = temp_235 * vp_c3.data[9].x;
    // 0x000958: 0x49A0020C01D70105 Ffma
    temp_247 = fma(temp_240, vp_c3.data[7].y, temp_242);
    // 0x000968: 0x4C68100C02070604 Fmul
    temp_248 = temp_235 * vp_c3.data[8].x;
    // 0x000970: 0x4C68100C02870608 Fmul
    temp_249 = temp_235 * vp_c3.data[10].x;
    // 0x000978: 0x4C5830180B270D0D Fadd
    temp_250 = 0.0 - vp_c6.data[44].z;
    temp_251 = temp_166 + temp_250;
    // 0x000988: 0x4C58100C00B70000 Fadd
    temp_252 = temp_231 + vp_c3.data[2].w;
    // 0x000990: 0x49A0018C02570103 Ffma
    temp_253 = fma(temp_240, vp_c3.data[9].y, temp_246);
    // 0x000998: 0x4C6810180BB70B0B Fmul
    temp_254 = temp_237 * vp_c6.data[46].w;
    // 0x0009A8: 0x49A0040C02970106 Ffma
    temp_255 = fma(temp_240, vp_c3.data[10].y, temp_249);
    // 0x0009B0: 0xEFF07F800C87FF0B Ast
    out_attr4.z = temp_254;
    // 0x0009B8: 0x49A0020C02170101 Ffma
    temp_256 = fma(temp_240, vp_c3.data[8].y, temp_248);
    // 0x0009C8: 0x49A0061803A70D0C Ffma
    temp_257 = fma(temp_251, vp_c6.data[14].z, temp_225);
    // 0x0009D0: 0x4C9807980307000D Mov
    // 0x0009D8: 0x49A0018C02670003 Ffma
    temp_258 = fma(temp_252, vp_c3.data[9].z, temp_253);
    // 0x0009E8: 0x49A0028C01E70005 Ffma
    temp_259 = fma(temp_252, vp_c3.data[7].z, temp_247);
    // 0x0009F0: 0x49A0030C02A70006 Ffma
    temp_260 = fma(temp_252, vp_c3.data[10].z, temp_255);
    // 0x0009F8: 0x49A0008C02270001 Ffma
    temp_261 = fma(temp_252, vp_c3.data[8].z, temp_256);
    // 0x000A08: 0x51A0051803B70C0C Ffma
    temp_262 = fma(temp_257, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000A10: 0x51A0069802F70707 Ffma
    temp_263 = fma(temp_245, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000A18: 0xEFF07F800B47FF0C Ast
    out_attr3.y = temp_262;
    // 0x000A28: 0x4C58100C02770303 Fadd
    temp_264 = temp_258 + vp_c3.data[9].w;
    // 0x000A30: 0xEFF07F800B07FF07 Ast
    out_attr3.x = temp_263;
    // 0x000A38: 0x4C58100C01F70505 Fadd
    temp_265 = temp_259 + vp_c3.data[7].w;
    // 0x000A48: 0xEFF07F800787FF03 Ast
    gl_Position.z = temp_264;
    // 0x000A50: 0x4C58100C02B70606 Fadd
    temp_266 = temp_260 + vp_c3.data[10].w;
    // 0x000A58: 0xEFF07F800707FF05 Ast
    gl_Position.x = temp_265;
    // 0x000A68: 0x4C58100C02370101 Fadd
    temp_267 = temp_261 + vp_c3.data[8].w;
    // 0x000A70: 0xEFF07F8007C7FF06 Ast
    gl_Position.w = temp_266;
    // 0x000A78: 0xEFF07F800747FF01 Ast
    gl_Position.y = temp_267;
    // 0x000A88: 0xE30000000007000F Exit
    return;
}
